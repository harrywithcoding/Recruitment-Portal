angular.module('myApp').controller('UserController', ['$scope', 'UserService', function ($scope, UserService) {
    $scope.showRegister = false; // Initially hide the register section
    $scope.showTable = true; // Initially show the table

    
    $scope.register = function () {
        var registrationData = {
            UserName: $scope.NewUser,
            Password: $scope.newPassword
        };

        UserService.register(registrationData)
            .then(function (response) {
                alert("Registration successful!");
                // You can handle the response or redirect to another page
            })
            .catch(function (error) {
                console.error('Error occurred during registration:', error);
            });
    };

    function GetMessageList() {
        var data = {}; // Add any parameters needed for your API request
        debugger
        $.ajax({
            type: "GET",
            url: "/api/Data/GetAllUserData",
            data: data,
            dataType: "json",
            success: function (result) {
                // Destroy the existing DataTable before reinitializing
                $('#tblErrorMessage').DataTable().destroy();
                Action(result);
            },
            error: function (error) {
                console.error('Error occurred while getting user list:', error);
            }
        });
    }

    function Action(result) {
        // Implement your logic here based on the result
        // For example, update $scope variables or manipulate the DOM
        $('#tblErrorMessage').DataTable({
            "data": result,
            "columns": [
                { "data": "U_ID" },
                { "data": "UserName" },
                { "data": "Password" }
            ]
        });
    }

    GetMessageList();

}]);
