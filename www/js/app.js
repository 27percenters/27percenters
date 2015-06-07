// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'firebase'])

.constant('firebaseUrl', 'https://27percenters.firebaseio.com')

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('landing', {
    url: "/landing",
    abstract: true,
    templateUrl: "templates/landing.html"
  })

  .state('landing.signup', {
    url: "/signup",
    views: {
      'menuContent': {
        templateUrl: "templates/signup.html",
        controller: 'SignupCtrl'
      }
    }
  })

  .state('landing.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html"
      }
    }
  })

  .state('landing.login', {
    url: "/login",
    views: {
      'menuContent': {
        templateUrl: "templates/login.html",
        controller: 'LoginCtrl'
      }
    }
  })

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.caregiver', {
    url: "/caregiver",
    views: {
      'menuContent': {
        templateUrl: "templates/caregiver.html"
      }
    }
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })

  .state('app.kids', {
    url: "/kids",
    views: {
      'menuContent': {
        templateUrl: "templates/kids.html",
        controller: 'KidsCtrl'
      }
    }
  })

  .state('app.kid', {
    url: "/kids/:kidId",
    views: {
      'menuContent': {
        templateUrl: "templates/kid.html",
        controller: 'KidCtrl'
      }
    }
  })

  .state('app.donations_success', {
    url: "/donations_success/:needId",
    views: {
      'menuContent': {
        templateUrl: "templates/donations_success.html",
        controller: 'DonationsSuccessCtrl'
      }
    }
  })

    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise(function(firebaseUrl, $firebaseObject, $state) {
    var ref = new Firebase('https://27percenters.firebaseio.com');
    if (ref.getAuth()) {
      return '/app/kids';
    } else {
      return '/landing/home';
    }
      return '/app/kids';
  })
});
