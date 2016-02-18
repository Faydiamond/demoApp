angular.module('starter')
  .controller('cierreticketCtrl', function($scope, valcampos, con) {
    $scope.paso = 1;
    $scope.ct = {
      TxtArea: ''
    };
    $scope.ct.p = 'S';
    $scope.ct.pp = 'S';
    $scope.ct.ppp = 'M';

    $scope.siguientePaso = function() {

      $scope.paso++;
      //
      /*var p = $scope.paso;
      if(p === 1){


      }else if(p === 2){

      }else if(p === 3){

      }else if(p === 4){

      }else if(p === 5){

      }*/

    };

    $scope.atras = function() {
        $scope.paso--;
    };

    // BLOCK START :: FIRMA
    var canvas = document.getElementById('signatureCanvas');
    var signaturepad = new SignaturePad(canvas);

    $scope.clearCanvas = function() {
      signaturepad.clear();
    };

    $scope.saveCanvas = function() {
      console.log(signaturepad.toDataURL());
      $scope.signature = signaturepad.toDataURL();
    };
    //BLOCK END :: FIRMA
  });
