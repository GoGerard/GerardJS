app.factory('Auth', ['$http', '$timeout', '$rootScope', '$cookieStore', function($http, $timeout, $rootScope, $cookieStore) {

  this.Login = function(token, callback) {
    $http.post(api_prefix+'/api/auth', {
        token: token,
      })
      .success(function(response) {
        callback(response);
      })
      .error(function(response) {
        callback(response);
      });
  };


  this.SetGlobal = function(token) {
    $rootScope.globals = {
      currentUser: {
        token: token,
      }
    };

    $http.defaults.headers.common['Authorization'] = token;
    $cookieStore.put('globals', $rootScope.globals);
  };

  this.RemoveGlobal = function() {
    $rootScope.globals = {};
    $cookieStore.remove('globals');
    $http.defaults.headers.common.Authorization = '';
  };

  this.DestroyToken = function(token) {
    $http.put(api_prefix+'/api/auth', {
        token: token,
      });
  };

  return this;

}]);
