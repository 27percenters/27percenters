angular.module('starter.controllers')
.controller('AppCtrl', function($scope, $ionicModal, $timeout, firebaseUrl, $firebaseObject) {

<<<<<<< HEAD:www/js/controllers.js
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

=======
>>>>>>> 7c747e84c324fcdfc477d122e9643e43b28fa6bd:www/js/controllers/app_ctrl.js
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.signupData = {};

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

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

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
<<<<<<< HEAD:www/js/controllers.js

  $scope.signUp = function() {
  console.log('Doing signUp', $scope.signupData);

  // Simulate a signUp delay. Remove this and replace with your login
  // code if using a sign Up system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})




.controller('PlaylistsCtrl', function($scope) {
  /*$scope.playlists = [
    { title: 'Match me now', id: 1 },
    { title: 'Chat with Recipients', id: 2 },
    { title: 'Account Status', id: 3 },
    { title: 'Search for Recipients', id: 4 },
    { title: 'Payment Info', id: 5 },
    { title: 'Donate to 27%ers', id: 6 }
  ];*/

  $scope.playlists = [
    { title: 'About Us', id: 1 },

  ];

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
=======
>>>>>>> 7c747e84c324fcdfc477d122e9643e43b28fa6bd:www/js/controllers/app_ctrl.js
});
