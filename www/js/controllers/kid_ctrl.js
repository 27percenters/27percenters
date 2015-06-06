angular.module('starter.controllers')
.controller('KidCtrl', function($scope, $stateParams, firebaseUrl, $firebaseObject,
                                $firebaseArray, $state, $ionicPopup) {
  var ref = new Firebase(firebaseUrl);
  var kid = $firebaseObject(ref.child('kids').child($stateParams.kidId));
  $scope.kid = kid;

  $scope.needs = $firebaseArray(ref.child('needs').orderByChild('kid').equalTo($stateParams.kidId));

  $scope.contribute = function (needId) {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Contribute',
      template: 'Your credit card ending with 4832 will be charged.  Continue?'
    });
    confirmPopup.then(function(res) {
      if (res) {
        $state.go('app.donations_success', { needId: needId });
      }
    });
  };
});
