"use strict"

const path = require("path");
const jsonfile = require("jsonfile");

function celebs(views, cat) {
    let end;
    if(cat === "all") {
        end = "pantheon.json";
    } else {
        end = `individual/${cat}.json`;
    }
    let file = path.join(__dirname,`/data/json/${views}/${end}`);

    return jsonfile.readFileSync(file);
}

module.exports = celebs;
