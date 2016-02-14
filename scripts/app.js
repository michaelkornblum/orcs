require('bootstrap-webpack');
require('../libs/bootstrap/css/bootstrap.min.css');
require('../libs/bootstrap/js/bootstrap.min.js');
require('../styles/main.styl');

var angular = require('angular');
require('angular-route');

var app = angular.module('app', ['ngRoute']);
require('./modules')(app);
