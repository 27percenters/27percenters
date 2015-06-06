angular.module('starter.controllers')
.controller('KidCtrl', function($scope, $stateParams, firebaseUrl, $firebaseObject) {
  var ref = new Firebase(firebaseUrl + '/kids/' +  $stateParams.kidId);
  $scope.kid = $firebaseObject(ref);
  $scope.needs = [{ name: 'Hello' }];
});
