const chai   = require("chai");
import celebs from "../celebs";

describe("Celebs", function() {
   describe("Data Test", function() {
      it("Should return an array of objects", function() {
         const celeb = celebs("views","all");
         chai.expect(celeb).to.be.an("array");
         celeb.map((elem) => chai.expect(elem).to.be.an("object"));
      });
      it("Object should have property domain for all", function() {
         const celeb = celebs("no-views","all");
         celeb.map((elem) => chai.expect(Reflect.has(elem, "domain")).to.be.true);
      });
      it("Object should have property ARTS for domain", function() {
         const celeb = celebs("no-views","domain");
         chai.expect(celeb.domain.indexOf("ARTS")).to.not.equal(-1);
      });
   });
});
