"use strict";

const fs       = require('fs');
const csv      = require('csv');
const path     = require("path");
const jsonfile = require('jsonfile');

function* cycle(ar) {
   let mod = ar.length, i = 0;
   while(true) yield ar[i++%mod];
}

const file      = (insert) => path.join(__dirname, `./json/${insert}.json`);
const fileViews = (view,insert) => file(`${view}/${insert}`);
const fileInds = (view, name) => fileViews(view, `individual/${name}`);
function writeJSON(name, dat) {
   jsonfile.writeFile(name, dat, function (err) {
      if(err) console.error(err);
   });
}

const parser = csv.parse({delimiter: ','}, function(err, data) {
   writeJSON(fileViews("views", "pantheonArray"), data);

   let len = data[0].length;
   let cutOff = data[0].indexOf("TotalPageViews");
   let dataNoViews = data.map((elem) => elem.slice(0, cutOff));
   writeJSON(fileViews("no-views", "pantheonArray"), dataNoViews);


   let names   = data.shift();
   let nameCyc = cycle(names);
   let dataJ   = data.map((e) =>
                    (e.reduce((a,c) => (a[nameCyc.next().value] = c, a),{})));
   writeJSON(fileViews("views","pantheon"), dataJ);

   let namesNoViews   = dataNoViews.shift();
   let nameCycNo = cycle(namesNoViews);
   let dataJNoViews   = dataNoViews.map((e) =>
                    (e.reduce((a,c) => (a[nameCycNo.next().value] = c, a),{})));
   writeJSON(fileViews("no-views","pantheon"), dataJNoViews);


   let dataAr = [];
   let dataArNoViews = [];
   for(let i = 0; i < names.length; i++) {
      dataAr.push(new Set());
      dataArNoViews.push(new Set());
   }
   data.map((ar) => ar.map((elem, ind) => dataAr[ind].add(elem)));
   dataNoViews.map((ar) => ar.map((elem, ind) => dataArNoViews[ind].add(elem)));

   let cats = dataAr.reduce((a,c) => (a[nameCyc.next().value] = Array.from(c), a),{});
   let catsNoViews = dataArNoViews.reduce((a,c) => (a[nameCycNo.next().value] = Array.from(c), a),{});

   Reflect.ownKeys(cats).map((e) => writeJSON(fileInds("views",e), {[e]: cats[e]}));
   Reflect.ownKeys(catsNoViews).map((e) => writeJSON(fileInds("no-views",e), {[e]: catsNoViews[e]}));

});

fs.createReadStream(__dirname+'/pantheon.csv').pipe(parser);
