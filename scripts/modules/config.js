module.exports = function(app) {
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/locations', {
        templateUrl: 'views/locations.html',
        controller: 'LocationsCtrl'
      })
      .when('/sites', {
        templateUrl: 'views/sites.html',
        controller: 'SitesCtrl'
      })
      .otherwise({
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  });
}
