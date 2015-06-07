angular.module('starter.controllers')
.controller('AppCtrl', function($scope, $ionicPopup, firebaseUrl, $firebaseObject, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  var ref = new Firebase(firebaseUrl);
  $scope.loginText = setLoginText(ref.getAuth());
  ref.onAuth(setLoginText);
  function setLoginText(authData) {
    console.log(authData);
    if (authData) {
      $scope.loggedInUser = $firebaseObject(ref.child('users').child(authData.uid));
    } else {
      $scope.loggedInUser = null;
    }
  }

  $scope.logout = function () {
    new Firebase(firebaseUrl).unauth();
    var alertPopup = $ionicPopup.alert({
      title: 'You have successfully logged out!',
    });
    alertPopup.then(function(res) {
      $state.go('landing/home');
    });
  }
});
