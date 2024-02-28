

angular.module('loginApp').controller('LoginController', function ($scope, LoginService) {
  
    $scope.username = '';
    $scope.password = '';
    $scope.NewUser = '';
    $scope.newPassword = '';

    $scope.showLogin = true;
    $scope.showRegister = false;

    $scope.toggleLogin = function () {
        $scope.showLogin = true;
        $scope.showRegister = false;
    };

    $scope.toggleRegister = function () {
        $scope.showLogin = false;
        $scope.showRegister = true;
    };

    $scope.login = function () {
        LoginService.login($scope.username, $scope.password)
            .then(function (response) {
                alert("Login successful!");
                window.location.href = '/App/Dashboard/index.html'; // Redirect to index.html
            })
            .catch(function (error) {
                console.error('Error occurred during login:', error);
                alert("Login failed! Please check your credentials.");
            });
    };

    $scope.register = function () {
        var registrationData = {
            UserName: $scope.NewUser,
            Password: $scope.newPassword
        };

        LoginService.register(registrationData)
            .then(function (response) {
                alert("Registration successful!");
                // You can handle the response or redirect to another page
            })
            .catch(function (error) {
                console.error('Error occurred during registration:', error);
            });
    };
});
