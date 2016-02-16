angular.module('starter')
  .config(function($stateProvider){

    $stateProvider
      .state('m.lista',{
        url : '/lista',
        views :  {
          'lista' : {
            templateUrl : 'pages/menu/lista/fLista/lista.html',
            controller : 'listaCtrl'
          }
        }
      });

  });
