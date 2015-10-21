var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {
  this.getUsers = function() {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://swapi.co/api/people/'
    }).then(function(res) {
      var starWarsData = res.data.results;
      deferred.resolve(starWarsData);
    })
    return deferred.promise;
  }

});
