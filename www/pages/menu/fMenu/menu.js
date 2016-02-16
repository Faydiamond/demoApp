angular.module('starter').config(function($stateProvider){
  $stateProvider.state('m',{
    url : '/menu',
    abstract : true,
    templateUrl : 'pages/menu/fMenu/menu.html'
  });
});
