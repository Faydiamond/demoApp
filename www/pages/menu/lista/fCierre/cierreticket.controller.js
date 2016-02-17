angular.module('starter')
  .controller('cierreticketCtrl',function($scope,valcampos,con){
    $scope.paso = 1;
    $scope.ct = {
      TxtArea : ''
    };


  $scope.siguientePaso = function(){
    console.log($scope.ct.TxtArea);

    if($scope.ct.TxtArea=="" ){
      alert("por  favor  llene  el  campo   solicitado")

    }else{
      $scope.paso++;
    }
  };

  // BLOCK START :: FIRMA
  var canvas=document.getElementById('signatureCanvas');
  var signaturepad = new SignaturePad(canvas);

  $scope.clearCanvas=function(){
    signaturepad.clear();
  };

  $scope.saveCanvas=function (){
    console.log(signaturepad.toDataURL());
    $scope.signature = signaturepad.toDataURL();
  };
  //BLOCK END :: FIRMA
});
