import requests
import json
from collections import Counter
from key import key

#URL to make API requests to
url = 'https://api.yelp.com/v3/businesses/search'

#this is the header for the get request
headers = {
    'Authorization': 'Bearer %s' % key
}

#given location and category, get top choices of that category
def returnCats(location, term):
    #This is to hold all possible options to later sort
    totalCats = []

    parameters = {'location': str(location),
              'term': str(term),
              'radius': 17000,
              'limit': 50
    }

    # using GET request to obtain response and JSON
    response = requests.get(url, headers=headers, params=parameters)
    query = response.json()['businesses']
    for q in query:
        size = len(q['categories'])
        for i in range(0, size):
            totalCats.append(format(q['categories'][i]['title']))
    collection = Counter(totalCats)
    top5 = []
    #this returns the top 5 from the counter as a list
    for i in range(0, len(collection.most_common(5))):
        top5.append((collection.most_common(5)[i][0]))
    return(top5)

def chooseCat(topFiveList):
    # Prompts user to choose specific category
    for i in range(0, 5):
        print(str(i + 1) + ". " + topFiveList[i])
    choice = int(input("Put the integer of the category you would like to choose: "))

    return topFiveList[choice - 1]

def listLocations(category, location, term):
    # Lists location based on specific category
    parameters = {'location': str(location),
                  'term': str(term),
                  'radius': 17000,
                  'limit': 50
    }

    response = requests.get(url, headers=headers, params=parameters)
    query = response.json()['businesses']

    for q in query:
        size = len(q['categories'])
        for i in range(0, size):
            if format(q['categories'][i]['title']) == category:
                print(format(q['name']))
