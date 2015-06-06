angular.module('starter.controllers')
.controller('LoginCtrl', function($scope, firebaseUrl, $firebaseObject) {

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

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    var ref = new Firebase(firebaseUrl);
    ref.authWithPassword({
      email: $scope.loginData.username,
      password: $scope.loginData.password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });

    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
});
