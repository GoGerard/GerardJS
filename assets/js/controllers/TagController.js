app.controller('TagController', ['$scope', 'Tags', 'Auth', '$route', function($scope, Tags, Auth, $route) {

  Tags.All().success(function(data) {
    $scope.tags = data;
  }).error(function(){
    Auth.RemoveGlobal()
  });

  $scope.Add = function(){
    //Needs More Bullshit
    Tags.New($scope.tag);
    $route.reload();
  }

  $scope.Delete = function (id) {
    // Moar Shit
    Tags.Delete(id);
    $route.reload();
  }


}]);
