require('../libs/bootstrap/css/bootstrap.min.css');

var angular = require('angular');
var app = angular.module('app', []);
require('./modules')(app);
