"use strict";

const Celebs = require("../celebs.js");

// First parameter must be views or no-views
// views are access data for how many times the artists were searche for
let celeb1 = new Celebs("views","all");
let celeb2 = new Celebs("no-views", "all");

// The second parameter must be a string for the data set you want to load
// all loads all the data columns
let celeb3 = new Celebs("views","all");

// Naming a specific individual column, that will be loaded instead
let celeb3 = new Celebs("views","all");
