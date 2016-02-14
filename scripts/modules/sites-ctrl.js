module.exports = function(app) {
  app.controller('SitesCtrl', function(currentSpot){
    currentSpot.setCurrentSpot('Sites', 'Manage the list of dive sites');
  });
}
