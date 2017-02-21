angular.module('starter.services', [])

.factory('Players', function($http) {

    var players;

    $http.get('../players.json').success(function(data) {
      players = data;
    });

    return {
      all: function() {
        return players;
      },
      get: function(playerId) {
        for (var i = 0; i < players.length; i++) {
          if (players[i].id === parseInt(playerId)) {
            return players[i];
          }
        }
        return null;
      }
    };
});
