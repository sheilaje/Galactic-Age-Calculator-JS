import { Age } from './../src/galacticAgeCalculator.js';

describe ( 'Age', function() {
let newAge, birthDate, currentDate, test;

  beforeEach(function() {
    let birthDate = new Date("04-06-1983");
    let currentDate = new Date("11-01-2019");
    let newAge = new Age(currentDate, birthDate);
    let test = newAge.calculateEarthYears();
    //console.log("test :", test);
  });
      //console.log("test");
  it('should return the earth years', function() {
     //let earthY = newAge.calculateEarthYears();
     //console.log("earthY : ", earthY);
    expect(newAge.userAge).toEqual(36);
  });

  it('should return the mercury Age', function() {
    expect(newAge.calculateMercuryYears()).toEqual(150);
  });

  it('should return the venus Age', function() {
    expect(newAge.calculateVenusYears()).toEqual(58);
  });

  it('should return the mars Age', function() {
    expect(newAge.calculateMarsYears()).toEqual(19);
  });

  it('should return the jupiter Age', function() {
    expect(newAge.calculateJupiterYears()).toEqual(3);
  });
  });
