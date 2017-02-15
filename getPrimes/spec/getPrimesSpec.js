(function(){
  'use strict';

  describe("Test cases for getPrimes function", function() {

      it("should return an [ 2, 3, 5, 7] if the argument passed is equal to 10", function() {
        expect(getPrimes(10)).toEqual([ 2, 3, 5, 7]);
      });

      it("it should return 'invalid input' for non-number input",function(){
        expect(getPrimes("getPrimes")).toEqual("invalid input");
      });

      it("it should return 'zero is not a prime number' for '0' argument",function(){
        expect(getPrimes(0)).toEqual("zero is not a prime number");
      });

      it("should return 'negative integers can not be prime' for negative integers", function() {
        expect(getPrimes(-23)).toEqual("negative integers can not be prime");
      });

      it("should return an '1 is not a prime number' if argument is equal to 1", function() {
        expect(getPrimes(1)).toBe("1 is not a prime number");
      });

      it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ] if argument is equal to 29", function() {
        expect(getPrimes(29)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]);
      });

      it("should return an [2,3] if the argument passed is equal to 4", function() {
        expect(getPrimes(4)).toEqual([ 2, 3 ]);
      });

      it("should return an [2,3,5,7] if the argument passed is equal to 7", function() {
        expect(getPrimes(7)).toEqual([ 2, 3, 5, 7 ]);
      });

      it("should return an [ 2, 3, 5, 7, 11 ] if the argument passed is equal to 12", function() {
        expect(getPrimes(12)).toEqual([ 2, 3, 5, 7, 11 ]);
      });

      it("should return an [ 2, 3, 5, 7, 11, 13, 17, 19 ] if the argument passed is equal to 20", function() {
        expect(getPrimes(20)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19 ]);
      });

      it("should return the equivalent of getPrimes(29) if the argument passed is equal to getPrimes(30)", function() {
        expect(getPrimes(30)).toEqual(getPrimes(29));
      });

      it("should return an [ 2 ] if the argument passed is equal to 2", function() {
        expect(getPrimes(2)).toEqual([ 2 ]);
      });

      it("should return an [ 2, 3 ] if the argument passed is equal to 3", function() {
        expect(getPrimes(3)).toEqual([ 2, 3 ]);
      });
    
  });
})();