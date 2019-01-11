'use strict';

import { Age } from './GalacticAgeCalculator.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function()
{
  $("#ageCalculator").submit(function(event){
    event.preventDefault();
    let userAge = $("#age").val();
    const newAge = new Age(userAge);
    let mercuryAge = newAge.calculateMercuryYears();
    $("#mecuryYears").text(mercuryAge);
  });

// console.log(userAge);
});
