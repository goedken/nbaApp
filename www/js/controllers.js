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

    //$http.get('../players.json').success(function(data) {
    //  $scope.players = data;
    //});

    $scope.listlength = 50;

    $scope.loadMore = function(){
      if(!$scope.players){
        $scope.$broadcast('scroll.infiniteScrollComplete');
        return;
      }

      if($scope.listlength < $scope.players.length) {
        $scope.listlength += 20;
      }
      $scope.$broadcast('scroll.infiniteScrollComplete');
    };

    Players.success(function(data) {
      $scope.players = [];
      $scope.players = data;
      //console.log($scope.playersUnparsed);
      //for(var i = 0; i < $scope.playersUnparsed.length; i++) {
      //  var player = JSON.parse($scope.playersUnparsed[i]);
      //  //console.log(player);
      //
      //  //for(var attr in player) {
      //  //  if(player.hasOwnProperty(attr)) {
      //  //    if(attr.includes('RANK')) {
      //  //      delete player[attr];
      //  //    } else {
      //  //      player[attr] = player[attr][0];
      //  //      var newAttr = attr.toLowerCase();
      //  //      player[newAttr] = player[attr];
      //  //      delete player[attr];
      //  //    }
      //  //
      //  //    //console.log(attr);
      //  //  }
      //  //}
      //
      //  //console.log(player);
      //
      //  $scope.players.push(player);
      //};


      //console.log($scope.players)
    });



    //$scope.players = Players.content;

    //$scope.players = Players.all();
    //console.log($scope.players);
})

.controller('PlayerDetailCtrl', function($scope, $http, Players, $stateParams) {
    //$scope.player = Players.get($stateParams.playerId);

    var players;
    // Players.content;
    //for (var i = 0; i < players.length; i++) {
    //  if (players[i].id === parseInt($stateParams.playerId)) {
    //    $scope.player = players[i];
    //  }
    //}

    //$http.get('../players.json').success(function(data) {
    //  players = data;
    //  for (var i = 0; i < players.length; i++) {
    //    if (players[i].id === parseInt($stateParams.playerId)) {
    //      $scope.player = players[i];
    //    }
    //  }
    //});

    Players.success(function(data) {
      players = data;
      for (var i = 0; i < players.length; i++) {
        if (players[i].player_id === parseInt($stateParams.playerId)) {
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
