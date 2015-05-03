define(function () {
  return function LoginCtrl($scope, $auth, $http) {
    $scope.myInfo = {};
    $scope.authenticate = function (provider) {
      $auth.authenticate(provider).then(function () {
      }).catch(function (response) {
        console.log(response.data ? response.data.message : response);
      });
    };

    $scope.logout = function () {
      $auth.logout();
    };

    $scope.isAuthenticated = function () {
      return $auth.isAuthenticated();
    };
  };
});