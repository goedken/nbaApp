angular.module('starter.services', [])

.factory('Players', function($http) {

    //return $http.get('../players.json');

    return $http.get('../listofplayers.json')
});
