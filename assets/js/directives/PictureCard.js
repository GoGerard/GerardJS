app.directive('pictureCard', function(){
   return{
    restrict: 'E',
    scope: {
      picture: '='
    },
    templateUrl: 'assets/js/directives/PictureCard.html'
  };
});
