app.factory('Tags', ['$http', function($http) {

  this.All = function() {
    return $http.get(api_prefix+'/api/tags')
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
  };

  this.Single = function(id) {
    return $http.get(api_prefix+'/api/tags/' + id)
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
  };

  this.New = function(tag) {
    $http.post(api_prefix+'/api/tags', {
        name: tag.name,
      });
  }

  this.Delete = function(id) {
    return $http.delete(api_prefix+'/api/tags/' + id)
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
  }

  return this;
}]);
