const Airport = require('../src/airport.js');
const Plane = require('../src/plane.js');
const Weather = require('../src/weather.js');

airport01 = new Airport('Airport01', new Weather);
airport02 = new Airport('Airport02', new Weather);

plane01 = new Plane('Plane01', airport01);
plane02 = new Plane('Plane02', airport02);

// check that the environment is setup correctly
console.log(airport01);
console.log(airport02);
console.log(plane01);
console.log(plane02);

// check that a plane can take off
do {
  console.log(plane01.take_off(airport02));
} while (plane01.location != "In Air");

// check that a plane can land
do {
  console.log(plane01.land());
} while (plane01.location === "In Air");
do {
  console.log(plane01.take_off(airport01));
} while (plane01.location != "In Air");
do {
  console.log(plane01.land());
} while (plane01.location === "In Air");

// check that a plane can't take off without a valid destination
console.log(plane02.take_off(''));
console.log(plane02.take_off(airport02));

// check that a plane can't land if an airport is full
do {
  console.log(plane01.take_off(airport02));
} while (plane01.location != "In Air");
airport02.capacity = 1;
console.log(plane01.land());
console.log(airport02);
