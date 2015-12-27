app.factory('Pictures', ['$http', function($http) {

  this.All = function() {
    return $http.get(api_prefix+'/api/pictures')
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
  };

  this.Single = function(id) {
    return $http.get(api_prefix+'/api/pictures/' + id)
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
  };

  this.New = function(picture) {
    $http.post(api_prefix+'/api/pictures', {
        title: picture.title,
        url: picture.url,
      });
  }

  this.Delete = function(id) {
    return $http.delete(api_prefix+'/api/pictures/' + id)
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
  }

  this.Update = function(picture) {
    $http.put(api_prefix+'/api/pictures', {
        id: picture.id,
        title: picture.title,
        url: picture.url,
      });
  }

  this.AppendTag = function(PictureID, TagID) {
    return $http.put(api_prefix+'/api/pictures/' + PictureID + '/add/' + TagID)
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
  }

  this.DeleteTag = function(PictureID, TagID) {
    return $http.delete(api_prefix+'/api/pictures/' + PictureID + '/del/' + TagID)
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
  }

  return this;
}]);
