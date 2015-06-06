angular.module('starter.controllers')
.controller('KidsCtrl', function($scope, $firebaseObject, firebaseUrl) {
  var ref = new Firebase(firebaseUrl + '/kids');
  $scope.kids = $firebaseObject(ref);
});
