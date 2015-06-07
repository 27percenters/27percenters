angular.module('starter.controllers')
.controller('SignupCtrl', function($scope, firebaseUrl, $state, $ionicPopup, $firebaseArray) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the signup modal
  $scope.signupData = {};

  // Perform the signup action when the user submits the signup form
  $scope.doSignup = function() {
    if (!$scope.signupData.full_name || !$scope.signupData.email || !$scope.signupData.password) {
      var alertPopup = $ionicPopup.alert({
        title: 'Please enter in a name, email, and password'
      });
      return;
    }

    var ref = new Firebase(firebaseUrl);
    ref.createUser({
      email: $scope.signupData.email,
      password: $scope.signupData.password
    }, function(error, authData) {
      if (error) {
        var message;
        switch (error.code) {
          case "EMAIL_TAKEN":
            message = "The email is already in use.";
            break;
          case "INVALID_EMAIL":
            message = "The specified email is not a valid email.";
            break;
          default:
            message = "Error creating user:" + error;
        }

        var alertPopup = $ionicPopup.alert({
          title: 'Sign up error',
          template: message
        });
      } else {
        var alertPopup = $ionicPopup.alert({
          title: 'You have successfully signed up for an account!',
        });
        alertPopup.then(function(res) {
          $state.go('app.kids');
        });
      }
    });
  };
});
