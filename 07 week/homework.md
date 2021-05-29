## Practice more API calls 

In order to practice more API calls, implement the following (as many as you want, in any order):

1. Implement the functionality to retrieve a:
    - random dog photo: https://random.dog/woof.json
    - random cat photo: https://aws.random.cat/meow
    - random fox photo: https://randomfox.ca/floof/
    - add a dropdown on the page where you can select which animal you want to see (options: dog, cat, fox)
    - add a "get photo" button, when clicking on the button, call the appropriate API (from the list above) to get the image of the selected animal

## Optional 
For those of you who like art, Rijksmuseum API is perfect for use: http://rijksmuseum.github.io/
you need to create an account in order to get an API key (a string that you need to enter in all the requests to that API)

Example request: 
https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=[API_KEY]&format=json
replace [API_KEY] with the string that you get after creating the account and requesting it
more info here: https://www.rijksmuseum.nl/en/api

Display Chuck Norris jokes on the page: http://www.icndb.com/api/ 

Display random or programming jokes on the page: https://github.com/15Dkatz/official_joke_api

For Rick and Morty fans, you can use this API to display and filter characters and episodes: https://rickandmortyapi.com/documentation#rest

For Game of Thrones fans, you can use this API to display info about Game of Thrones characters and books: https://anapioficeandfire.com/Documentation

Similarly, for Star Wars fans: https://swapi.co/
You can also use other public APIs from this list: https://github.com/public-apis/public-apis 

For simplicity, use the APIs that need no Authentication or use an API Key (but not OAuth, that's a bit too complex for now). Also, they should work on HTTPS (Yes) and they should not have CORS no (CORS is a setting that enables web apps to make calls to an API on a different domain - this is something that is not allowed by default)