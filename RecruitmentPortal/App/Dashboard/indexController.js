// indexcontroller.js
angular.module('myApp').controller('indexController', ['$scope', '$state', function ($scope, $state) {
    $scope.navigateToDetails = function (itemId) {
        $state.go('details', { id: itemId });
    };

    $scope.navigateToHome = function () {
        $state.go('home');
        debugger
    };

    $scope.navigateToUser = function () {
        $state.go('user');
        debugger
    };

    // Other user-related actions/functions

}]);
