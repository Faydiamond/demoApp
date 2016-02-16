angular.module('starter')
  .config(function($stateProvider){

    $stateProvider
      .state('m.documentar',{
        url : '/lista/documentar',
        views : {
          'lista' : {
            templateUrl : 'pages/menu/lista/fDocumentar/documentar.html',
            controller : 'DocumentarCtrl'
          }
        },
      });

  });
