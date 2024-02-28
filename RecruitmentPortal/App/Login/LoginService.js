// Define a service for handling user registration

angular.module('loginApp').service('LoginService', function ($http) {
    

    this.login = function (username, password) {
        
        var url = '/api/Data/login?UserName=' + encodeURIComponent(username) + '&Password=' + encodeURIComponent(password);
        return $http.get(url);
    };

    this.register= function (registrationData) {
        return $http.post('/api/Data/Register', registrationData);
    };
    
    
});
