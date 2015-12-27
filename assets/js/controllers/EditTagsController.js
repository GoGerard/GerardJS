app.controller('EditTagsController', ['$scope', 'Pictures', '$routeParams', 'Auth', '$location', 'Tags', '$route', function($scope, Pictures, $routeParams, Auth, $location, Tags, $route) {
  Pictures.Single($routeParams.id).success(function(data) {
    $scope.picture = data;
  }).error(function(){
    Auth.RemoveGlobal()
  });

  Tags.All().success(function(data) {
    $scope.tags = data;
  }).error(function(){
    Auth.RemoveGlobal()
  });

  $scope.Add = function(id) {
    Pictures.AppendTag($scope.picture.id, id)
    $route.reload();
  }

  $scope.Delete = function(id) {
    Pictures.DeleteTag($scope.picture.id, id)
    $route.reload();
  }

}]);
