angular.module('myApp').factory('UserService', ['$http', function ($http) {
    var service = {};

    service.register = function (registrationData) {
        return $http.post('/api/Data/Register', registrationData);
    };

    service.getAllUsers = function () {
       
        return $http.get('/api/Data/GetAllUserData');
    };

    return service;
}]);