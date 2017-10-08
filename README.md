# Celebs
Package built to provide acces to the Pantheon Fame 1.0 database.  The database
has a selection of roughly 12,000 notable individuals from all areas of public
life.

```javascript
let celeb = new Celebs("views","all");

celeb.then((elem) => console.log(elem[0])); // 11241 items
//{ en_curid: '307',
  // name: 'Abraham Lincoln',
  // numlangs: '131',
  // birthcity: 'Hodgenville', ...
```

## Installing
`npm install celebs`

## Citation

*Built on the Pantheon 1.0, Verified Dataset of Globally Famous Biographies*
https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/28201

## Main Example
Setup.
```javascript
// First parameter must be views or no-views
// views are access data for how many times the artists were searche for
let celeb1 = new Celebs("views","all");
let celeb2 = new Celebs("no-views", "all");

// The second parameter must be a string for the data set you want to load
// all loads all the data columns
let celeb3 = new Celebs("views","all");

// Naming a specific individual column, that will be loaded instead
let celeb3 = new Celebs("views","all");
```

Process Data Using Promises
```javascript
// Creating a new Celebs returns a promise wrapping the data set
let celeb = new Celebs("views","all");

console.log(celeb.constructor.name === "Promise"); // true

// You can process the data using then and passing a function
celeb.then((elem) => console.log(elem)); // 11241 items
```

## API

### Celebs
Main class, constructor takes valid file path parameters and returns Celebs.
Invalid first parameter, type, will throw an error.

#### Construction
```javascript
// First parameter must be views or no-views
// views are access data for how many times the artists were searche for
let celeb1 = new Celebs("views","all");
let celeb2 = new Celebs("no-views", "all");

// The second parameter must be a string for the data set you want to load
// all loads all the data columns
let celeb3 = new Celebs("views","all");

// Naming a specific individual column, that will be loaded instead
let celeb3 = new Celebs("views","all");
```
Returns RegReplacer object.
#### Methods

## Scripts

#### Testing
To run mocha/chai tests.
`npm run test`

#### Process Data
Reprocess the original csv file.
`npm run process`

#### Examples
To run the main example.
`npm run ex`

To run all examples.
`npm run exAll`

## License
Celebs.js is released under the MIT license.
