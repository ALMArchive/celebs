"use strict";

const celebs = require("../celebs.js");

// Creating a new celebs returns a promise wrapping the data set
let celeb = celebs("views","all");

// You can process the data using then and passing a function
celeb.map((elem) => console.log(elem)); // 11241 items
