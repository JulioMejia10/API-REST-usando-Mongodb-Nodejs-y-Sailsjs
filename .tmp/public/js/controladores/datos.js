angular.module('Datos.module',[])
.controller('datos', ['$scope', 'servicios', function($scope,servicios){
	//console.log('hola datos');
	$scope.reg = {};
	servicios.Alldatos()
	.success(function(res){
		console.log(res);
	})
	.error(function(res){
		console.log(res);
	})

	$scope.guardar = function (reg) {
		console.log(reg);
		
		servicios.Datos(reg)
		.success(function(res){
			console.log(res);
		}).error(function(res){
			console.log(res);
		})

	}

	$scope.update = function (reg) {
		console.log(reg)
		var nombre = reg.name;
		console.log(nombre);
		servicios.update(nombre,reg)
		.success(function(res){
			console.log(res);
		})
		.error(function(res){
			console.log(res);
		})
	}
	$scope.delete = function (nom){
		//var nom = '573fa526f38bc8d1772298b6'
		var nombre = nom;
		//console.log(nombre);
		servicios.delete(nombre)
		.success(function(res){
			console.log(res);
		})
		.error(function(res){
			console.log(res);
		})

	}

}])