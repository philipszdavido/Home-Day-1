'use strict'
 
 function getPrimes(num) {
  var primes = [2,3];

  var checkPrime = function(num) {
    var numIsPrime;
    for(var i = 2; i < num; i++){
           if(num % i === 0){
               numIsPrime = false ;
               break;
           }
           else {
            numIsPrime = true;
           }
      }
      return numIsPrime;
  }

  if (num < 0) {
    return "negative integers can not be prime";
  }
  else if (num === 1) {
    return '1 is not a prime number';  
  }
  else if (num === 2) {
    return [2];
  }
  else if (num === 3) {
    return primes;
  }
  else {
    for(var i = 4; i <= num; i++) {
          if(checkPrime(i) === true ){
              primes.push(i);
          }
    }
    return primes;
  }
}

