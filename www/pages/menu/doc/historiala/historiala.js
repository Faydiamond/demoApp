angular.module('starter')
  .config(function($stateProvider){

    $stateProvider
      .state('m.historiala',{
        url : '/historial/historiala:id',
        views : {
          'historial' : {
            templateUrl : 'pages/historiala/historiala.html',
            controller : 'historialaCtrl'
          }
        },
      });

  });
