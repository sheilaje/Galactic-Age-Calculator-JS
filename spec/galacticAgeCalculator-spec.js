import { Age } from './../src/galacticAgeCalculator.js';

describe ( 'Age', function() {
var newAge;
  beforeEach(function() {
    newAge = new Age(25);
  });

  it('should return the mercury Age', function() {
    expect(newAge.calculateMercuryYears()).toEqual(104);
  });
});
