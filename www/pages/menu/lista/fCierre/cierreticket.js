angular.module('starter')
  .config(function($stateProvider){

    $stateProvider
      .state('m.cierreticket',{
        url : '/lista/cierreticket',
        views : {
          'lista' : {
            templateUrl : 'pages/menu/lista/fCierre/cierreticket.html',
            controller : 'cierreticketCtrl'
          }
        },
      });

  });
