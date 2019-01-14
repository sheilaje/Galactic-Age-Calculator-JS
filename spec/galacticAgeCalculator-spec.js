import { Age } from './../src/galacticAgeCalculator.js';

describe ( 'Age', function() {
let newAge, birthDate, currentDate, test, mercuryYears, venusYears, marsYears, jupiterYears;

  beforeEach(function() {
    birthDate = new Date("04-06-1983");
    currentDate = new Date("11-01-2019");
    newAge = new Age(currentDate, birthDate);
    test = newAge.calculateEarthYears();
    console.log("newAge: ", newAge);
    console.log("test :", test);
    mercuryYears = newAge.calculateMercuryYears();
    venusYears = newAge.calculateVenusYears();
    marsYears = newAge.calculateMarsYears();
    jupiterYears = newAge.calculateJupiterYears();
  });

  it('should return the earth years', function() {
     console.log("newAge1: ", newAge);
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

  it('should return the life expectancy in earth', function() {
    expect(newAge.lifeExpectancyInEarth(70)).toEqual(34);
  });

  it('should return the life expectancy in mercury', function() {
    expect(newAge.lifeExpectancyInMercury(70)).toEqual(142);
  });

  it('should return the life expectancy in venus', function() {
    expect(newAge.lifeExpectancyInVenus(70)).toEqual(55);
  });

  it('should return the life expectancy in mars', function() {
    expect(newAge.lifeExpectancyInMars(70)).toEqual(18);
  });

  it('should return the life expectancy in jupiter', function() {
    expect(newAge.lifeExpectancyInJupiter(70)).toEqual(3);
  });

  });
