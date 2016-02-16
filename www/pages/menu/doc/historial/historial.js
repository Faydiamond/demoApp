angular.module('starter')
  .config(function($stateProvider){

    $stateProvider
      .state('m.historial',{
        url : '/historial',
        views : {
          'historial' : {
            templateUrl : 'pages/historial/historial.html',
            controller : 'historialCtrl'
          }
        },
      });

  });
