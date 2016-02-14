
module.exports = function(app) {
  app.controller('AdminCtrl', function($scope, currentSpot) {
    $scope.isActive = isActive;
    $scope.getTitle = getTitle;

    function isActive(menuId) {
      return currentSpot.getActiveMenu() == menuId;
    }

    function getTitle() {
      return currentSpot.getTitle();
    }
  });
}
