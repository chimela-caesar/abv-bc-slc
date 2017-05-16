var app=require('../app/primes.js');
describe("Get Primes Functionality",function(){
  it("should return false for non-integer value of n", function() {
    expect(app.getPrimes("a string")).toEqual(false);
  });
  
  it("should return false for negative value of n", function() {
    expect(app.getPrimes(-2)).toEqual(false);
  });
  
  it("should return false for a zero value of n", function() {
    expect(app.getPrimes(0)).toEqual(false);
  });
  
  it("should return an empty array if no primes are obtainable", function() {
    expect(app.getPrimes(1)).toEqual([]);
  });
  
  it("should return an array for valid values of n", function() {
    expect(app.getPrimes(25) instanceof Array).toBeTruthy();
  });
  
  it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ] for n = 25", function() {
    expect(app.getPrimes(25)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]);
  });
  
  it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ] for n = 30", function() {
    expect(app.getPrimes(30)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]);
  });
  
  it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ] for n = 35", function() {
    expect(app.getPrimes(35)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ]);
  });
  
  it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 ] for n = 40", function() {
    expect(app.getPrimes(40)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 ]);
  });
  
  it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ] for n = 50", function() {
    expect(app.getPrimes(50)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]);
  });
});