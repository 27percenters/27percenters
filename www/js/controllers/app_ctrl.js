angular.module('starter.controllers')
.controller('AppCtrl', function($scope, $ionicModal, firebaseUrl, $firebaseObject) {

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
    if (authData) {
      $scope.loggedInUser = $firebaseObject(ref.child('users').child(authData.uid));
    } else {
      $scope.loggedInUser = null;
    }
  }
});
