angular.module('starter.controllers')
.controller('RootCtrl', function($scope, firebaseUrl, $firebaseObject, $state) {
  var ref = new Firebase(firebaseUrl);
  $scope.loginText = setLoginText(ref.getAuth());
  if (authData) {
    $state.go('app.kids');
  } else {
    $state.go('login');
  }
});
