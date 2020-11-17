class Plane {
  constructor(name, airport) {
    this.name = name;
    this.location = airport;
    this.destination = '';
    airport.land(this);
  }

  land() {
    const request_to_land = this.destination.land(this);
    if (this.location != "In Air") {
      return "Can't land, if already on the ground.";
    } else if (request_to_land.indexOf('Denied') != -1) {
      return `${this.destination.name} airport is full, sorry`;
    } else if (this.weather_stormy(this.destination)) {
      return 'Weather is Stormy, landing aborted.';
    } else {
      this.location = this.destination;
      this.destination = '';
      return `${this.name} has landed at ${this.location.name}.`;
    }
  };

  take_off(destination) {
    if ((!destination) || (destination === this.location)) {
      return 'Invalid destination, take off aborted.'
    } else if (this.location === "In Air") {
      return "Can't take off, whilst in flight";
    } else if (this.weather_stormy(this.location)) {
      return 'Weather is Stormy, take off aborted.'
    } else {
      this.location.take_off(this);
      this.destination = destination;
      this.location = 'In Air';
      return `${this.name} has taken off, flying to ${this.destination.name}`;
    };
  };

  weather_stormy(location) {
    return location.weather.look() === 'Stormy';
  };
};

module.exports = Plane;
