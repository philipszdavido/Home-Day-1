'use strict'

function dataTypes(input) {
    //checks if the input is a string object
    if (typeof(input) === "string") {
      return input.length;
    }
    //checks if the input parameter is a boolean object
    else if (typeof(input) === "boolean") {
      return input;
    }
    //checks if the parameter input is an intanceof a function 
    if (input instanceof Function) {
      return input(true);
    }
    //checks if the parameter input is a number object
    else if (typeof(input) === "number") {
      //checks if the parameter input is less than 100
      if (input < 100) {
        return "less than 100";
      }
      //checks if the parameter input is equal to 100
      else if (input === 100) {
        return "equal to 100";
      }
      else {
        return "more than 100";
      }
  }
  //checks if the parameter input is a function object
  else if (typeof(input) === "function") {
    return input(75);
  }
  //checks if the parameter input is an array object
  else if (Array.isArray(input) === true) {
    return input[2];
  }
  else {
    return "no value"
  }
}
