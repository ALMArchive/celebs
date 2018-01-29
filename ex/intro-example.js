"use strict";

import celebs from "../celebs";

let celeb = celebs("views","all");

celeb.map((elem) => console.log(elem)); // 11241 items
  // [{ en_curid: '307',
  // name: 'Abraham Lincoln',
  // numlangs: '131',
  // birthcity: 'Hodgenville', ...
