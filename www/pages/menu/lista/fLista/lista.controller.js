angular.module('starter')
  .controller('listaCtrl', function($scope, valcampos, con, $state) {

    $scope.db = [{
      id_ticket: 1,
      estado: 'N',
      cliente: 'Protela',
      url : 'documentar'
    }, {
      id_ticket: 2,
      estado: 'N',
      cliente: 'Pedro domec',
      url : 'documentar'
    }, {
      id_ticket: 3,
      estado: 'P',
      cliente: 'Unired',
      url : 'documentar'
    }, {
      id_ticket: 4,
      estado: 'V',
      cliente: 'Bosque',
      url : 'cierreticket'
    }, {
      id_ticket: 123,
      estado: 'P',
      cliente: 'Locatel',
      url : 'documentar'
    }, {
      id_ticket: 421,
      estado: 'P',
      cliente: 'Nieto y Cannel',
      url : 'documentar'
    }, {
      id_ticket: 589,
      estado: 'V',
      cliente: 'Protela',
      url : 'cierreticket'
    }, {
      id_ticket: 3098,
      estado: 'P',
      cliente: 'Supplies',
      url : 'documentar'
    }];
  });
