playing = True
while playing:
    print("1. left\n2. right\n0. quit")
    try:
        choice = int(input("Which direction would you like to go?\n"))
    except ValueError:
        print("You must select 0,1 or 2.")
        choice = None
    
    if choice == 1:
        print("You chose left.")
    elif choice == 2:
        print("You chose right.")
    elif choice == 0:
        print("Buh bye")
        playing = False 
    