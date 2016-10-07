angular.module('devFriends').service('friendService', function($http, $q){

  this.getFriends = function(){
    return $http({
      method: 'GET',
      url: 'http://connections.devmounta.in/api/profiles'
    })
  };

});
