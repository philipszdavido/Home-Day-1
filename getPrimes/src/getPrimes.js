function getPrimes(number) {
  if (typeof number == "number") {
    if(number<0){
      return "negative integers can not be prime";
    }
    if(number==0){
      return "zero is not a prime number";
    }
    if(number==1){
      return "1 is not a prime number";
    }
    var nonprimes = [],  // Array of non prime numbers
      i,
      j,
      primes = []; // Array of prime numbers
    for (i = 2; i <= number; ++i) {
      if (!nonprimes[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= number; j += i) {
          nonprimes[j] = true;
        }
      }
    }
    return primes;  // Array of prime numbers
}else{
  return "invalid input";
}
}