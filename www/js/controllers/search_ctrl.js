angular.module('starter.controllers')
.controller('SearchCtrl', function($scope, firebaseUrl, $state, $ionicPopup, $firebaseObject,
                                   $firebaseAuth) {
    $scope.searchData = {}
    var ref = new Firebase(firebaseUrl + '/kids')
    $scope.kids = $firebaseObject(ref);
    $scope.filteredKids = $scope.kids
    $scope.doSearch = function() {     
        var search_strng = $scope.searchData.term;
        if (search_strng == '') {$scope.filteredKids = $scope.kids}
        else {
            $scope.filteredKids = {}
            for (kidID in $scope.kids) {
                var kid = $scope.kids[kidID]
                if (!kid) { continue; }
                if (kid.first_name == search_strng || kid.last_name == search_strng) {
                    $scope.filteredKids[kidID] = kid
                }
            }
        }
    }
});