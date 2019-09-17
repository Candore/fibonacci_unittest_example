const fibonacci = require("../fibonacci");

describe("For a given number n", () => {
it("should return the next fibonocci number", () => {
    //  const arr =fibonacci.getFibArray(10);
    const arr = [0,1,1,2,3,5,8,13,21,34,55,89,144]
    expect(fibonacci.getNextNumber(6, arr)).toBe(8);
});

  it("should return the n'th number in the fib sequence", () => {
    const arr = fibonacci.getFibArray(7);
    expect(arr[6]).toBe(8);
 });

   it("should return the string sequence uptil the nth value", () => {
     expect(fibonacci.getFibSequence(6)).toEqual("0 1 1 2 3 5");
  });

});
