app.controller('LogoutController', ['$scope', '$rootScope', '$location', 'Auth', function($scope, $rootScope, $location, Auth) {
  // reset login status

  $scope.logout = function(DelToken) {
    Auth.DestroyToken(DelToken);
    Auth.RemoveGlobal();
    $location.path('/');
  };


}]);
