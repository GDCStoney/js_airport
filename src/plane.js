class Plane {
  constructor(name, airport) {
    this.name = name;
    this.location = airport;
    this.destination = '';
    airport.land(this);
  }

  land() {
    this.destination.land(this);
    this.location = this.destination;
    this.destination = '';
    return `${this.name} has landed at ${this.location.name}.`;
  };

  take_off(destination) {
    this.location.take_off(this);
    this.destination = destination;
    this.location = 'In Air';
    return `${this.name} has taken off, flying to ${this.destination.name}`;
  };
};

module.exports = Plane;
