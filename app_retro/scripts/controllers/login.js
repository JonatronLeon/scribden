'use strict';
// handles registration, logging in, and session authentication
angular.module('login', ['resources.user', 'resources.authorization', 'ngCookies'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'views/login/login.html',
                controller: 'LoginCtrl'
            })
            .when('/register', {
                templateUrl: 'views/login/register.html',
                controller: 'RegisterCtrl'
            });
    }])
    .controller('LoginCtrl', [ '$scope', 'Authorization', function LoginCtrl($scope, Authorization) {
        $scope.form = { password: 'n/a' };
        
        // @TODO: Have password field auto-show when email is filled out if a password is set
        $scope.login = function () {
            if (!/^(?!undefined)[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{1,3}$/.test($scope.form.email)) {
                $scope.alert = true;
                return;
            }
            
            // authenticate the user and redirect to their den
            Authorization.signIn($scope.form.email, $scope.form.password); // @TODO: Authenticate with password
        };
    } ])
    .controller('RegisterCtrl', [ '$scope', '$cookieStore', '$location', 'User', function RegisterCtrl($scope, $cookieStore, $location, User) {
        $scope.user = $cookieStore.get('user');
        $scope.form = {};
        
        $scope.update = function () {
            $scope.user.username = $scope.form.username;
            User.query({ 
                path: 'name/' + $scope.form.username,
                successCallback: function (data) {
                    // username is taken
                    if (data.result && data.result.length > 0) {
                        $scope.alert = true;
                    } else {
                        $scope.alert = false;
                        // username is available. update user's username
                        User.update({ data: $scope.user,
                            successCallback: function (data) {
                                $cookieStore.put('user', $scope.user);
                                $location.path('/den');
                            }
                            });
                    }
                }
            });
        };
    }]);