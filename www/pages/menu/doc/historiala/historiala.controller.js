angular.module('starter')
  .controller('historialaCtrl',function($scope,valcampos,$stateParams,$cordovaBarcodeScanner,con){



    $scope.leercodigo=function(){

    $cordovaBarcode
    Scanner.scan().then(function(Imagenescaneada) {
      alert(Imagenescaneada.text)

    },function (error){
      alert("ha  ocurrido  un error: "+error);
    });
  }
});
