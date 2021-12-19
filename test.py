from functions import *

def printDivider():
    print("====================")

if __name__ == "__main__":
    location = input("Enter location: ")
    term = input("Keyword/Term: ")

    # Printing top 5 categories based on 
    printDivider()
    for i in returnCats(location, term):
        print(i)

    # Printing locations from chosen category
    category = chooseCat(returnCats(location, term))
    print("Chosen Category: " + category)

    listLocations(category, location, term)