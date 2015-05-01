define(['app', "uiRouter"], function (app) {
  'use strict';
  return app.config(function ($stateProvider, $urlRouterProvider) {
    console.log('routes defined');
    $urlRouterProvider.otherwise('/state1');
    $stateProvider.state('state1', {
      url: '/state1',
      template: '{{state}}',
      controller: function ($scope) {
        $scope.state = "state is 1";
      }
    })
    .state('state2', {
      url: '/state2',
      template: '{{state}}',
      controller: function ($scope) {
        $scope.state = "state is 2";
      }
    });
  });
});
