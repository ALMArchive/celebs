# Celebs
Package built to provide acces to the Pantheon Fame 1.0 database.  The database
has a selection of roughly 12,000 notable individuals from all areas of public
life.

```javascript
let celeb = celebs("views","all");

celeb.map((elem) => console.log(elem)); // 11241 items
  // [{ en_curid: '307',
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
let celeb1 = celebs("views","all");
let celeb2 = celebs("no-views", "all");

// The second parameter must be a string for the data set you want to load
// all loads all the data columns
let celeb3 = celebs("views","all");

// If a specific data column is passed in it will attempt to load that instead
let celeb4 = celebs("views","all");

celeb4.map((elem) => console.log(elem)); // 11241 items
```

## API

### Celebs
Main class, constructor takes valid file path parameters and returns an object.

#### Init
```javascript
// First parameter must be views or no-views
// views are access data for how many times the artists were searched for
let celeb1 = celebs("views","all");
let celeb2 = celebs("no-views", "all");

// The second parameter must be the property of the data set you want to load
// all loads all the data columns
let celeb3 = celebs("views","all");

// If a specific data column is passed in it will attempt to load that instead
let celeb4 = celebs("views","all");
```

#### Using Data
To use data, call celebs with the appropriate parameters, returns an object.
```javascript
// Calling celebs returns object of data
let celeb = celebs("views","all");

// You can process the array of data
celeb.map((elem) => console.log(elem)); // 11241 items
```

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
