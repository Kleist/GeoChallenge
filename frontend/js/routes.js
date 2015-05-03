define(['app', "uiRouter"], function (app) {
  'use strict';
  return app.config(function ($stateProvider, $urlRouterProvider) {
    console.log('routes defined');
    $urlRouterProvider.otherwise('/login');
    $stateProvider.state('profile', {
      url: '/profile',
      templateUrl: 'profile.html',
      controllerAs: 'vm',
      controller: function ($http, $state) {
        this.name = "";
        this.picture = "";
        this.loaded = false;
        $http.get('/api/me')
        .success(function(data) {
          this.name = data.displayName;
          this.picture = data.picture;
          this.loaded = true;
        }.bind(this))
        .error(function(data) {
          console.log(data);
          $state.go('login');
        })

      }
    })
    .state('login', {
      url: '/login',
      templateUrl: 'login.html',
      controller: 'LoginCtrl'
    });
  });
});
