describe("Airport", function() {
  it("should respond to land", function() {
    let airport = new Airport("Gatwick");
    expect(airport.land()).toBeDefined();
  });
});
