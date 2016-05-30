angular.module('Datos.module',[])
.controller('datos', ['$scope', 'servicios', function($scope,servicios){
	console.log('hola datos');
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
		servicios.update(reg)
		.success(function(res){
			console.log(res);
		})
		.error(function(res){
			console.log(res);
		})
	}
	$scope.delete = function (){
		//console.log('delete');
		var nom = '57477fa98e675ac81bd4bb4d'
		servicios.delete(nom)
		.success(function(res){
			console.log(res);
		})
		.error(function(res){
			console.log(res);
		})

	}

}])