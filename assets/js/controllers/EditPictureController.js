app.controller('EditPictureController', ['$scope', 'Pictures', '$routeParams', 'Auth', '$location',  function($scope, Pictures, $routeParams, Auth, $location) {
  Pictures.Single($routeParams.id).success(function(data) {
    $scope.picture = data;
  }).error(function(){
    Auth.RemoveGlobal()
  });

  $scope.Delete = function () {
    // Moar Shit
    Pictures.Delete($scope.picture.id);
    $location.path('/pictures');
  }

  $scope.Update = function() {
    Pictures.Update($scope.picture);
    $location.path('/pictures');
  }
  
}]);
