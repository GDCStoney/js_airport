class Airport {
  constructor(name){
    this.name = name;
  }
  land(plane) {
    plane.status = "landed"
    return "You can land the plane.";
  };
};
