var app = angular.module('GoGerard', ['ngRoute', 'ngCookies']);
var api_prefix = 'http://192.168.99.100:8080'; //Might be docker default IP, but check using 'docker-machine ip default'

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'assets/views/home.html'
    })
    .when('/auth', {
      controller: 'AuthController',
      templateUrl: 'assets/views/auth.html'
    })
    .when('/logout', {
      controller: 'LogoutController',
      templateUrl: 'assets/views/logout.html'
    })
    .when('/pictures', {
      controller: 'ListController',
      templateUrl: 'assets/views/pictures.html'
    })
    .when('/editpicture/:id', {
      controller: 'EditPictureController',
      templateUrl: 'assets/views/editpicture.html'
    })
    .when('/addpicture', {
      controller: 'AddPictureController',
      templateUrl: 'assets/views/addpicture.html'
    })
    .when('/addtag', {
      controller: 'TagController',
      templateUrl: 'assets/views/addtag.html'
    })
    .when('/edittags/:id', {
      controller: 'EditTagsController',
      templateUrl: 'assets/views/edittags.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.run(['$rootScope', '$location', '$cookieStore', '$http',
  function($rootScope, $location, $cookieStore, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
      $http.defaults.headers.common['Authorization'] = $rootScope.globals.currentUser.token; // jshint ignore:line
    }

    $rootScope.$on('$locationChangeStart', function(event, next, current) {
      // redirect to login page if not logged in
      if (!$rootScope.globals.currentUser) {
        switch ($location.path()) {
          case '/':
            break;
          case '/auth':
            break;
          case '/pictures':
            $location.path('/auth'); //No Access
            break;
          case '/addpicture':
            $location.path('/auth'); //No Access
            break;
          case '/addtag':
            $location.path('/auth'); //No Access
            break;
          case '/logout':
            $location.path('/auth'); //No Access
            break;
          default:
            break;

        }
        if ($location.path().lastIndexOf("/editpicture", 0) === 0) { //fuck javascript
          $location.path('/auth'); //No Access
        }
      }
    });
  }
]);
