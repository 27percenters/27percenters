angular.module('starter.controllers')
.controller('PlaylistsCtrl', function($scope, $firebaseArray, firebaseUrl) {
  var ref = new Firebase(firebaseUrl + '/people');
  $scope.playlists = $firebaseArray(ref);
});
