"use strict"

const fs = require("fs");
const path = require("path");

class Celebs {
    constructor(views, cat) {
        if(views !== "views" && views !== "no-views") {
            throw new Error("First parameter to Celebs must be views or no-views");
        }

        if(typeof cat !== "string") throw new Error("Second parameter to Celebs must be a string");

        let end;
        if(cat === "all") {
            end = "pantheon.json";
        } else {
            end = `individual/${cat}.json`;
        }
        let file = path.join(__dirname,`/data/json/${views}/${end}`);

        return new Promise((res, rej) => {
            fs.readFile(file, 'utf-8', function(err, data) {
                if(err) rej(err);
                let obj = JSON.parse(data);
                res(obj);
            })
        });
    }
}

module.exports = Celebs;
