require('bootstrap-webpack');
require('../libs/bootstrap/css/bootstrap.min.css');
require('../libs/bootstrap/js/bootstrap.min.js');
require('../styles/main.styl');
var $ = require('jquery');

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
