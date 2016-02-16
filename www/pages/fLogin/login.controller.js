angular.module('starter')
  .controller('LoginCtrl',function($scope,valcampos,con,$state){
//Creacion  de  campos  mediante  un arreglo:
    $scope.fore = {
      usu : '',                                                 //variableusu
      pass  :''                                                 //variable pass
    };
//funcion
    $scope.openTab =  function(ev){                             //
      var s = $scope.fore;                                      //declaro  variable
      if (!valcampos.valida([s.usu,s.pass])){                   //llamo  a  mi ayuda:val campos y si es vacio
        alert('esta vacio');                                    //envio  un  mensaje
      }else {
       con.s({                                                  //metodo select
           table : 'usuario',
           val : '*',
           where : {
             nickname : s.usu,
             contrasena : s.pass
           }
       }).then(function(data){
         if(data[0])
          $state.go('m.lista');
        else
          alert('Credenciales incorrectas');
       });
      }
    };



});
