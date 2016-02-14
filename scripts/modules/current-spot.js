module.exports = function(app) {
  app.factory('currentSpot', function() {
    var activeMenuId = "";
    var titleText = "";
    return {
      setCurrentSpot: function(menuId, title) {
        activeMenuId = menuId;
        titleText = title;
      },
      getActiveMenu: function() {
        return activeMenuId;
      },
      getTitle: function() {
        return titleText;
      }
    }
  });
}
