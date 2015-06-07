angular.module('starter.controllers')
.controller('DonationsSuccessCtrl', function($scope, $stateParams, firebaseUrl, $firebaseObject,
                                             $ionicHistory) {
  var ref = new Firebase(firebaseUrl);
  $scope.need = $firebaseObject(ref.child('needs').child($stateParams.needId));

  var kidId = $firebaseObject(ref.child('needs').child($stateParams.needId).child('kid'));
  kidId.$loaded().then(function () {
    $scope.kid = $firebaseObject(ref.child('kids').child(kidId.$value));
  });;
  $ionicHistory.nextViewOptions({ disableBack: true });
});
