class Airport {
  constructor(name){
    this.name = name;
    this.hanger = [];
  }

  land(plane) {
    this.hanger.push(plane);
    return `${plane.name} is in the hanger`;
  };

  take_off(plane) {
    const index = this.hanger.indexOf(plane);
    if (index >- 1) {
      this.hanger.splice(index, 1);
    }
    return `${plane.name} has left the hanger`;
  };
};

module.exports = Airport;
