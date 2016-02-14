module.exports = function(app) {
  app.controller('MainCtrl', function(currentSpot) {
    currentSpot.setCurrentSpot('', '');
  });
}
