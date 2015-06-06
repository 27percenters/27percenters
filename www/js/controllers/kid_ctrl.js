angular.module('starter.controllers')
.controller('KidCtrl', function($scope, $stateParams, firebaseUrl, $firebaseObject, $firebaseArray) {
  var ref = new Firebase(firebaseUrl);
  var kid = $firebaseObject(ref.child('kids').child($stateParams.kidId));
  $scope.kid = kid;

  var intId = parseInt($stateParams.kidId);
  $scope.needs = $firebaseArray(ref.child('needs').orderByChild('kid').equalTo(intId));
});
