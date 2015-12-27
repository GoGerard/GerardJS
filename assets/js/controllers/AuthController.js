app.controller('AuthController', ['$scope', '$rootScope', '$location', 'Auth', function($scope, $rootScope, $location, Auth) {
  // reset login status
  Auth.RemoveGlobal();

  $scope.login = function() {
    $scope.dataLoading = true;
    Auth.Login($scope.token, function(response) {
      if (response.status == 'success') {
        Auth.SetGlobal($scope.token);
        $location.path('/pictures');
      } else {
        $scope.error = response.status;
        $scope.dataLoading = false;
      }
    });
  };


}]);
