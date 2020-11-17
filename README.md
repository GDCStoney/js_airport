# Airport Challenge in JavaScript

## Introduction
This is the JavaScript attempt at the Airport Challenge. The main parts are:
- plane.js
  - the JavaScript module for the Plane class
    - land()
    - take_off(destination airport)
    - isWeatherStormy(location/destination)

- airport.js
  - the JavaScript module for the Airport class
    - land(plane)
    - take_off(plane)

- weather.js
  - the JavaScript module to randomise the weather
    - look()

- feature.test.js
  - the feature testing file, basically runs a number of scenarios


## Run / Test the solution
fork the repository, then run the feature tests from the root directory
  - ```$ node src/feature.test.js```
    - creates a number of objects
    - Plane01 takes off from initial airport (airport01)
    - plane01 lands at second airport (airport02)


### Next steps
- visual (HTML) dashboard showing status of objects?
