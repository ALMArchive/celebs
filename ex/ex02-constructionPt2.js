"use strict";

import celebs from "../celebs";

// Calling celebs returns object of data
let celeb = celebs("views","all");

// You can process the array of data
celeb.map((elem) => console.log(elem)); // 11241 items
