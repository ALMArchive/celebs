"use strict";

import celebs from "../celebs";

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
