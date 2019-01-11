import { Age } from './../src/galacticAgeCalculator.js';

describe ( 'Age', function() {
var newAge;
  beforeEach(function() {
    newAge = new Age(25);
  });

  it('should return the mercury Age', function() {
    expect(newAge.calculateMercuryYears()).toEqual(104);
  });
  it('should return the venus Age', function() {
    expect(newAge.calculateVenusYears()).toEqual(40);
  });
});
