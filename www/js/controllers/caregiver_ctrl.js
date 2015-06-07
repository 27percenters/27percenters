angular.module('starter.controllers')
.controller('CaregiverCtrl', function($scope, $firebaseObject, firebaseUrl) {
  var ref = new Firebase(firebaseUrl);
  var kid = $firebaseObject(ref.child('kids').child("Esmeralda"));
  $scope.kid = kid;
})