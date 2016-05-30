angular.module('miController', ['ngSanitize'])
	.controller('Controlador', ['$scope', 'servicios', function ($scope, servicios) {
		servicios.Api()
			.success(function (res){
				//console.log(res);
				$scope.data = res;
				console.log($scope.data);
				

			})
			.error(function(err){
				console.log(err);
			})
		
		
		$scope.eliminar = function() {
			$scope.habilitado = false;
		}

		$scope.habilita = function() {
			$scope.habilitado = false;
		}
		$scope.ver = function() {
			$scope.habilitado = true;
		}

		$scope.func = function (p){
			console.log(p);
		}



}]);