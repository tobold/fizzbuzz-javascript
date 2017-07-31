describe("fizzBuzz", function() {

  it("returns fizz if number is divisble by 3", function() {
    expect(fizzBuzz(3)).toEqual("Fizz")
  });

  it("returns buzz if number is divisble by 5", function() {
    expect(fizzBuzz(5)).toEqual("Buzz")
  });

  it("returns FizzBuzz if number is divisble by 15", function() {
    expect(fizzBuzz(15)).toEqual("FizzBuzz")
  });

  it("returns all other numbers ", function() {
    expect(fizzBuzz(1)).toEqual(1)
  });
});
