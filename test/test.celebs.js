"use strict"

const chai = require("chai");
const Celebs = require("../celebs.js");
const is   = require("is");
const passIns = ["",1,()=>{},[],{},null,undefined,Symbol("")];

describe("Celebs", function() {
   describe("Construction", function() {
      it("object returned from Celebs constructor should be a promise.", function() {
         const celeb = new Celebs("views","all");
         chai.expect(celeb.constructor.name === "Promise").to.be.true;
      });
      it("Throw error if first parameter is not string", function() {
         passIns.filter((elem) => is.array(elem)).map((elem) =>
                           chai.expect(() => new Celebs(elem, "")).to.throw(Error));
      });
      it("Throw error if second parameter is not string", function() {
         passIns.filter((elem) => is.array(elem)).map((elem) =>
                           chai.expect(() => new Celebs("views", elem)).to.throw(Error));
      });
   });
   describe("Data Test", function() {
      it("Should return object inside the promise", function() {
         const celeb = new Celebs("views","all");
         celeb.then((elem) => chai.expect(elem).to.be.an("array"));
      });
      it("Object should have property domain for all", function() {
         const celeb = new Celebs("no-views","all");
         celeb.then((elem) => chai.expect(!!elem[0]).to.be.true);
      });
      it("Object should have property domain for domain", function() {
         const celeb = new Celebs("no-views","domain");
         celeb.then((elem) => chai.expect(!!elem.domain).to.be.true);
      });
      it("Object should have property ARTS for domain", function() {
         const celeb = new Celebs("no-views","domain");
         celeb.then((elem) => chai.expect(elem.domain.indexOf("ARTS")).to.not.equal(-1));
      });
   });
});
