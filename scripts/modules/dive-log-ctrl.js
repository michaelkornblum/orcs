var dives = require('./dives');

module.exports = function(app) {
  app.controller('DiveLogCtrl', function($scope) {
    $scope.dives = dives;
  });
}
