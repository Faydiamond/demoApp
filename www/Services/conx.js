angular.module('starter')
  .service('con', function($http, $q) {
    //$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    var params = {}; // VAL // TABLE // WHERE // PROCEDURE NAME
    //prePost
    function preP(url, params) {
      url =  'http://190.144.94.178:9000'+url;
      //var pa = CryptoJS.AES.encrypt(params, "NixKey2512");
      return $q(function(resolve, reject) {
        $http.post(url, params).then(function(response) {
          if (!response.data)
            reject(false);
          else
            resolve(response.data);
        }, function(response) {
          alert('Verifica tu conexión a internet.');
          //break
          reject(response.status);
        });
      });
    }
    //SELECT
    var select = function(p) {
      return $q(function(resolve, reject) {
        if (p) setParams(p);
        //
        preP('/api/connections/q', {
            'sentence': 'select ' + params.val.toString() + ' from ' + params.table + ' where ' + params.where
          })
          .then(function(ep) {
            if (ep)
              resolve(ep);
          }, function(op) {
            alert('Error de sintaxis');
            reject(op);
          });
      });
    };
    //UPDATE
    var update = function(p) {
      return $q(function(resolve, reject) {
        if (p)
          setParams(p);

        preP('/api/connections/u', {
            'sentence': 'update ' + params.table + ' set ' + params.val.toString() + ' where ' + params.where
          })
          .then(function(ep) {
            if (ep)
              resolve(ep);
          }, function(op) {
            not('ERROR CONECCTION ON SUPER TRUNCE UPDATER');
            reject(op);
          });
      });
    };
    //INSERT
    var insert = function(p) {
      return $q(function(resolve, reject) {
        if (p)
          setParams(p);
        var sel = 'insert into ' + params.table + ' values (' + params.val.toString() + ')';
        preP('/api/connections/i', {'sentence': sel}).then(function(ep) {
            if (ep)
              resolve(ep);
          }, function(op) {
            not('ERROR CONECCTION ON SUPER TRUNCE INSERTER');
            reject(op);
          });
      });
    };
    //Return Execute
    var rExecute = function(p) {
      return $q(function(resolve, reject) {
        if (p)
          setParams(p);
        preP('/api/connections/rP', {
            'sentence': 'exec  ' + params.Procedure + ' ' + params.val.toString()
          })
          .then(function(ep) {
            if (ep)
              resolve(ep);
          }, function(op) {
            not('ERROR CONECCTION ON SUPER TRUNCE RE');
            reject(op);
          });
      });
    };
    //Empty Execute
    var eExecute = function(p) {
      return $q(function(resolve, reject) {
        if (p)
          setParams(p);

        preP('/api/connections/eP', {
            'sentence': 'exec  ' + params.Procedure + ' ' + params.val.toString()
          })
          .then(function(ep) {
            if (ep)
              resolve(ep);
          }, function(op) {
            not('ERROR CONECCTION ON SUPER TRUNCE EE');
            reject(op);
          });
      });
    };

    var setParams = function(p) {
      return $q(function(resolve) {
        var w = '';
        if (p.where === undefined)
          p.where = ' 1=1 ';
        else if (p.where instanceof Object){
          var c = 0;
          for (var item in p.where) {
            c++;
            if(!(c == Object.keys(p.where).length))
              w += " "+  item + " = '" + p.where[item] +"' and  ";
            else
              w += " "+  item + " = '" + p.where[item] +"' ";
          }
          p.where = w;
        }
        //
        for (var o in p) {
          if (p[o] instanceof Array)
            p[o] = p[o].toString()
          p[o] = p[o].replace(/--|select|insert|update|delete|exec|create/g, '');
        }
        params = p;
        resolve('ya');
      });
    };

    return {
      s: select,
      i: insert,
      u: update,
      rE: rExecute,
      eE: eExecute
    };
  });
