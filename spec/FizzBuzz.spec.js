let resultArray = [...Array(100).keys()];
resultArray.shift();
resultArray.push(100);

describe("FizzBuzz", function()  {
  it("should print 100 numbers", function() {
    console.log(resultArray);

    expect(fizzBuzz(100)).toEqual(resultArray);
    console.log(fizzBuzz(100));
  });
});
