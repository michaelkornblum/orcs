require('../libs/bootstrap/css/bootstrap.min.css');
//let $ = require('jquery');
let dives = require('./dives');
var angular = require('angular');
//var app = angular.module('app', []);
//require('./bands')(app);

$(document).ready(() => {
  for (let i = 0; i < dives.length; i++) {
    let dive = dives[i];
    $("#logbook").append(
      `<div class='col-sm-4'>
        <h3>${dive.site}</h3>
        <h4>${dive.location}</h4>
        <h2>${dive.depth} feet | ${dive.time} mins</h2>
      </div>`
    );
  }
});
