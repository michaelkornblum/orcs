require('../libs/bootstrap/css/bootstrap.min.css');
require('../styles/main.styl');

var angular = require('angular');
var app = angular.module('app', []);
require('./modules')(app);
