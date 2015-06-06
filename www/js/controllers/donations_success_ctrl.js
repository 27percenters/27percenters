angular.module('starter.controllers')
.controller('DonationsSuccessCtrl', function($scope, $stateParams, firebaseUrl, $firebaseObject) {
  var ref = new Firebase(firebaseUrl);
  var kidId = $firebaseObject(ref.child('needs').child($stateParams.needId).child('kid'));
  kidId.$loaded().then(function () {
    $scope.kid = $firebaseObject(ref.child('kids').child(kidId.$value));
  });;
});
