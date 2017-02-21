angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('PlayersCtrl', function($scope, $http, Players) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

    $http.get('../players.json').success(function(data) {
      $scope.players = data;
    });

    //$scope.players = Players.all();
    console.log($scope.players);
})

.controller('PlayerDetailCtrl', function($scope, $http, Players, $stateParams) {
    //$scope.player = Players.get($stateParams.playerId);

    var players;

    $http.get('../players.json').success(function(data) {
      players = data;
      for (var i = 0; i < players.length; i++) {
        if (players[i].id === parseInt($stateParams.playerId)) {
          $scope.player = players[i];
        }
      }
    });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
