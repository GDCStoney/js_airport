describe("Plane", function () {
  it("responds to land", function() {
    let plane = new Plane('Landed');
    expect(plane.land()).toBeDefined();
  });
});
