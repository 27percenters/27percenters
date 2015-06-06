angular.module('starter.controllers')
.controller('KidsCtrl', function($scope, $firebaseArray, firebaseUrl) {
  var ref = new Firebase(firebaseUrl + '/kids');
  $scope.kids = $firebaseArray(ref);
});
