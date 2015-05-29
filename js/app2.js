var app = angular.module('apiApp', ['ngRoute']);

//configuracion del routeProvider
app.config(function($routeProvider){
    $routeProvider
        .when("/listing", {
            controller: "apiAppCtrl",
            controllerAs: "vm",
            templateUrl: "listing.html"
        })
        .when("/add", {
            controller: "apiAppCtrl",
            controllerAs: "vm",
            templateUrl: "add.html"
        })
        .when("/edit", {
            controller: "apiAppCtrl",
            controllerAs: "vm",
            templateUrl: "edit.html"
        });
});
app.factory("usersFactory", function(){
    var users = [];
    var user = '';

    var interfaz = {
       
        getUsers: function(){
           $http.post(vm.url).success(function(respuesta){
            //console.log("res:", respuesta);
                datos = respuesta;
               
            });
           return datos;
        },
        nuevaDescarga: function(descarga){
            descargasRealizadas.push(descarga);
        }
    }
    return interfaz;
});

app.controller('apiAppCtrl', ['$http', controladorPrincipal]);

function controladorPrincipal($http, usersFactory){
    var vm = this;
    vm.filtro = '';
    vm.url = 'http://192.168.1.3/8amarketing.com/angular/api/index.php/api/users'
    //http post para traer data
    vm.traerData = function(){
       usersFactory.getUsers();
    }
    //inicializo un objeto en los datos de formulario
    vm.datos = {};
    vm.res = '';
    // declaro la función enviar
    vm.enviar = function(){
      $http.post("http://192.168.1.3/8amarketing.com/angular/api/index.php/api/addUser", vm.datos)
        .success(function(res){
          //console.log(res);
          vm.res = res;
        });  
    }    
}