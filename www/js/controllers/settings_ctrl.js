angular.module('starter.controllers')
.controller('SettingsCtrl', function($scope, $firebaseArray, firebaseUrl) {
  var ref = new Firebase(firebaseUrl + '/people');
  $scope.playlists = $firebaseArray(ref);
});
