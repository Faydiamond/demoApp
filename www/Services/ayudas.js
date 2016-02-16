angular.module('starter').service('valcampos',function(){

  function validacion(arr){
    var bol = true;
    for (var i = 0; i < arr.length; i++){
      if(arr[i] === ''){
          bol = false;
          break;
      }
    }
    return bol;
  }

  return {
    valida : validacion
  };
});
