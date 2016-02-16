angular.module('starter')
  .config(function($stateProvider){

    $stateProvider
      .state('m.cierreticket',{
        url : '/cierreticket',
        views : {
          'cierreticket' : {
            templateUrl : 'pages/menu/lista/fCierre/cierreticket.html',
            controller : 'cierreticketCtrl'
          }
        },
      });

  });
