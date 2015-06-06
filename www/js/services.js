angular.module('starter.services', [])
  .factory("Auth", ["$firebaseAuth", "$rootScope",
  function ($firebaseAuth, $rootScope, firebaseUrl) {
    var ref = new Firebase(firebaseUrl);
    return $firebaseAuth(ref);
  }]);
