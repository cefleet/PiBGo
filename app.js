const express = require('express')
const {exec} = require('child_process');
const app = express()
const port = 3000
//const exec = require('child_process').exec

let usedPorts = [3000]
let proceses = {}
app.use(express.static(__dirname+"/public"))

app.get('/game', (req, res) => {

    const game_port = usedPorts
            .sort()
            .find((i,idx)=>i+1 != usedPorts[idx+1]? true:false)+1

    usedPorts.push(game_port)

    console.log(game_port)
    const child = exec(
        `python3 ${__dirname}/python/pyxtermjs/app.py -p ${game_port} --command python3 --cmd-args game.py`
    )

    proceses[game_port] = child

    //stdout is shared amung all of the items... this is not a good way of doing this.
    child.stdout.on('data', data=>{
        if(!res.headersSent) {
            res.send({port:game_port})
        } else {
            console.log(data.toString())
        }
    })


})
app.listen(port, () => console.log(`Example app listening on port 
${port}!`))