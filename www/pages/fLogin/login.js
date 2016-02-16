angular.module('starter')
  .config(function($stateProvider){

    $stateProvider
      .state('login',{
        url : '/',
        templateUrl : 'pages/fLogin/login.html',
        controller : 'LoginCtrl'
      });

  });
