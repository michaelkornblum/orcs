module.exports = function(app) {
  app.controller('LocationsCtrl', function(currentSpot){
    currentSpot.setCurrentSpot('Locations', 'Manage the list of diving locations.');
  });
}
