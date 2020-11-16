  const fizzBuzz = (number) => {
    let tmpOutput = [...Array(number).keys()];
    tmpOutput.shift();
    tmpOutput.push(100);
    return tmpOutput;
  };
