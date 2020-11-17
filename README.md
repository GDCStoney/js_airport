# Airport Challenge in JavaScript

## Introduction
This is the JavaScript attempt at the Airport Challenge. The main parts are:
- plane.js
  - the JavaScript module for the Plane class
    - land()
    - take_off(destination airport)

- airport.js
  - the JavaScript module for the Airport class
    - land(plane)
    - take_off(plane)

- feature.test.js
  - the feature testing file, basically runs a number of scenarios


## Run / Test the solution
fork the repository, then run the feature tests from the root directory
  - ```$ node src/feature.test.js```
    - creates a number of objects
    - Plane01 takes off from initial airport (airport01)
    - plane01 lands at second airport (airport02)


### Next steps
- introduce edge checking (airport full, airport doesn't have plane)
- introduce weather (stormy prevents land/take_off)
- visual (HTML) dashboard showing status of objects? 
