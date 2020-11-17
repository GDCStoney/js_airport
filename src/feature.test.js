const Airport = require('./airport.js');
const Plane = require('./plane.js');

airport01 = new Airport('Airport01');
airport02 = new Airport('Airport02');

plane01 = new Plane('Plane01', airport01);
plane02 = new Plane('Plane02', airport02);

console.log(airport01);
console.log(airport02);
console.log(plane01);
console.log(plane02);
console.log(plane01.take_off(airport02));
console.log(airport01);
console.log(airport02);
console.log(plane01.land());
console.log(airport02);
