'use strict'
 
 function getPrimes(number) {
  var primes = [2,3];

  var checkPrime = function(number) {//this is a function call to check for prime number.
    var numIsPrime;
    for(var i = 2; i < number; i++){
           if(number % i === 0){
               numIsPrime = false ;
               break;
           }
           else {
            numIsPrime = true;
           }
      }
      return numIsPrime;
  }

  //checks if the argument number is a negative number.
  if (number < 0) {
    return "negative integers can not be prime";
  }
  //check if the argument number is equals to 1, because 1 is not a prime number
  else if (number === 1) {
    return '1 is not a prime number';  
  }
  //checks if the argument number is equals to 2.
  else if (number === 2) {
    return [2];
  }
  //checks if the argument number is equals to 3.
  else if (number === 3) {
    return primes;
  }
  else {
    for(var i = 4; i <= number; i++) {
          if(checkPrime(i) === true ){
              primes.push(i);
          }
    }
    return primes;
  }
}
