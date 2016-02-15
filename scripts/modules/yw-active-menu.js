module.exports = function(app) {
  app.directive('ywActiveMenu', function(currentSpot) {
    return function(scope, element, attrs) {
      var activeMenuId = attrs["ywActiveMenu"];
      var activeTitle = attrs["ywActiveTitle"];
      currentSpot.setCurrentSpot(activeMenuId, activeTitle);
    }
  });
}
