'use strict';

import { Age } from './GalacticAgeCalculator.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function()
{
  $("#ageCalculator").submit(function(event){
    event.preventDefault();
    let activityState = 0;
    let userDOB = $("#age").val();
    const birthDate = new Date(userDOB);
    const currentDate = new Date();
    const newAge = new Age(currentDate, birthDate);
    let earthAge = newAge.calculateEarthYears();
    $("#earthYears").text(earthAge);
    let mercuryAge = newAge.calculateMercuryYears();
    $("#mecuryYears").text(mercuryAge);
    let venusAge = newAge.calculateVenusYears();
    $("#venusYears").text(venusAge);
    let marsAge = newAge.calculateMarsYears();
    $("#marsYears").text(marsAge);
    let jupiterAge = newAge.calculateJupiterYears();
    $("#jupiterYears").text(jupiterAge);
    
    activityState = $("#active").val();
    console.log("activityState :", activityState);
    let lifeSpan = (activityState == 1) ? "80" : "70";


    console.log(lifeSpan);
    let lifeExpectancyEarth = newAge.lifeExpectancyInEarth(lifeSpan);

    if(lifeExpectancyEarth < 0) {
      $(".lifeExpectancy").text("You lived past the life expectancy");
      $("#lifeInEarth").text((lifeExpectancyEarth * -1));
    } else {
      $(".lifeExpectancy").text("Your life expectancy");
      $("#lifeInEarth").text(lifeExpectancyEarth);
    }

    let lifeExpectancyMercury = newAge.lifeExpectancyInMercury(lifeSpan);
    if(lifeExpectancyMercury < 0) {
      $(".lifeExpectancy").text("You lived past the life expectancy");
      $("#lifeInMercury").text((lifeExpectancyMercury * -1));
    } else {
      $("#lifeInMercury").text(lifeExpectancyMercury);
    }

    let lifeExpectancyVenus = newAge.lifeExpectancyInVenus(lifeSpan);
    if(lifeExpectancyVenus < 0) {
      $(".lifeExpectancy").text("You lived past the life expectancy");
      $("#lifeInVenus").text((lifeExpectancyVenus * -1));
    } else {
      $("#lifeInVenus").text(lifeExpectancyVenus);
    }

    let lifeExpectancyMars = newAge.lifeExpectancyInMars(lifeSpan);
    if(lifeExpectancyMars < 0) {
      $(".lifeExpectancy").text("You lived past the life expectancy");
      $("#lifeInMars").text((lifeExpectancyMars * -1));
    } else {
        $("#lifeInMars").text(lifeExpectancyMars);
    }

    let lifeExpectancyJupiter = newAge.lifeExpectancyInJupiter(lifeSpan);
    if(lifeExpectancyJupiter < 0) {
      $(".lifeExpectancy").text("You lived past the life expectancy");
      $("#lifeInJupiter").text((lifeExpectancyJupiter * -1));
    } else {
      $("#lifeInJupiter").text(lifeExpectancyJupiter);
    }

    console.log("lifeSpan","earthAge" ,lifeSpan, earthAge);
  });

});
