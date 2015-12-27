app.controller('ListController', ['$scope', 'Pictures', 'Tags', 'Auth', function($scope, Pictures, Tags, Auth) {

  Pictures.All().success(function(data) {
    $scope.pictures = data;
  }).error(function(){
    Auth.RemoveGlobal()
  });


  Tags.All().success(function(data) {
    $scope.tags = data;
  }).error(function(){
    Auth.RemoveGlobal()
  });


}]);
