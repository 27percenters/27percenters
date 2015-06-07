angular.module('starter.controllers')
.controller('SignupCtrl', function($scope, firebaseUrl, $state, $ionicPopup, $firebaseObject,
                                   $firebaseAuth) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the signup modal
  $scope.signupData = { type: 'caregiver' };

  // Perform the signup action when the user submits the signup form
  $scope.doSignup = function() {
    if (!$scope.signupData.full_name || !$scope.signupData.email || !$scope.signupData.password) {
      var alertPopup = $ionicPopup.alert({
        title: 'Please enter in a name, email, and password'
      });
      return;
    }

    var ref = new Firebase(firebaseUrl);
    var authObj = $firebaseAuth(ref);

    authObj.$createUser({
      email: $scope.signupData.email,
      password: $scope.signupData.password
    }).then(function(authData) {
      var fullName = $scope.signupData.full_name;
      var firstName = fullName.split(' ').slice(0, -1).join(' ');
      var lastName = fullName.split(' ').slice(-1).join(' ');
      var data = {
        email: $scope.signupData.email,
        type: $scope.signupData.type,
        first_name: firstName,
        last_name: lastName
      };

      var ref = new Firebase(firebaseUrl).child('users').child(authData.uid);
      var user = $firebaseObject(ref);
      user.email = $scope.signupData.email;
      user.type = $scope.signupData.type;
      user.first_name = firstName;
      user.last_name = lastName;
      user.$save();
      var alertPopup = $ionicPopup.alert({
        title: 'You have successfully signed up for an account!',
      });
      alertPopup.then(function(res) {
        $state.go('app.kids');
      });

      return authObj.$authWithPassword({
        email: $scope.signupData.email,
        password: $scope.signupData.password
      });
    }).catch(function (error) {
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
    });
  };
});
