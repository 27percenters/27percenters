angular.module('starter.controllers')
.controller('LoginCtrl', function($scope, firebaseUrl, $firebaseObject, $state, $ionicPopup) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    var ref = new Firebase(firebaseUrl);
    ref.authWithPassword({
      email: $scope.loginData.username,
      password: $scope.loginData.password
    }, function(error, authData) {
      if (error) {
        var alertPopup = $ionicPopup.alert({
          title: 'Invalid Login',
          template: 'Please try your email and password again'
        });
      } else {
        var alertPopup = $ionicPopup.alert({
          title: 'You have successfully logged in!',
        });
        alertPopup.then(function(res) {
          $state.go('app.kids');
        });
      }
    });
  };

  $scope.fbLogin = function() {
    var ref = new Firebase(firebaseUrl);
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        var alertPopup = $ionicPopup.alert({
          title: 'Login Failed',
          template: 'Login with Facebook failed.'
        });
      } else {
        var alertPopup = $ionicPopup.alert({
          title: 'You have successfully logged in!',
        });
        alertPopup.then(function(res) {
          $state.go('app.kids');
        })
      }
    });
  };

  $scope.googleLogin = function() {
    var ref = new Firebase(firebaseUrl);
    ref.authWithOAuthPopup("google", function(error, authData) {
      if (error) {
        var alertPopup = $ionicPopup.alert({
          title: 'Login Failed',
          template: 'Login with Google failed.'
        });
      } else {
        var alertPopup = $ionicPopup.alert({
          title: 'You have successfully logged in!',
        });
        alertPopup.then(function(res) {
          $state.go('app.kids');
        })
      }
    });
  }

});
