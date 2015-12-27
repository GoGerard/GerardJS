app.controller('AddPictureController', ['$scope', '$interval', 'Pictures', '$location', function($scope, $interval, Pictures, $location) {
  //temporaly
  Pictures.All().success(function(data) {
    $scope.pictures = data;
  }).error(function(){
    Auth.RemoveGlobal()
  });

  $scope.Add = function(){
    //Needs More Bullshit
    Pictures.New($scope.picture);
    $location.path('/pictures');
  }


  var Clock = function() {
    $scope.newdate = Date.now();
  }
  Clock();
  $interval(Clock, 1000);
}]);
