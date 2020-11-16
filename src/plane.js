class Plane {
  constuctor(status) {
    this.status = "landed"

  }
  land(airport) {
    airport.land(this);
    return this.status;
  };
};
