var app=require('../app/primes.js');
describe("Get Primes",function(){
  it("should return false for non-integer value of n", function() {
    expect(app.getPrimes("a string")).toEqual(false);
  });
});