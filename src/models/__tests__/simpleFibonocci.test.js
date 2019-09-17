const simpleFib = require("../simpleFibonocci");

describe("For a given number n", () => {
   it("should return the next fibonocci number", () => {
       expect(simpleFib.getNextNum(3)).toBe(5);
   });

   it("should return the nth value in the sequence", () => {
       expect(simpleFib.getFibSequence(6)).toEqual(8);
   });

});
