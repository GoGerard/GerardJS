app.directive('newPictureCard', function() {
  return {
    restrict: 'E',
    scope: {
      picture: '=',
      date: '='
    },
    templateUrl: 'assets/js/directives/NewPictureCard.html'
  };
});
