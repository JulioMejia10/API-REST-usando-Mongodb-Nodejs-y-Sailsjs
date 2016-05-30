angular.module('codigoPostal', [])
	.controller('controladorPostal', ['$scope', 'servicios', function ($scope, servicios) {
		
		$scope.enter = function (e) {
			//console.log(e);
			if (e.keyCode == 13) {

				//console.log('trece');
				var codigo = $scope.codigo;
				
				/*servicios.Postal(codigo)
				//servicios.postalc(codigo)
					.success(function (res){
						$scope.data = res;
						console.log($scope.data);
						var municipio = $scope.data.postalcodes[0].adminName2;
						var estado = $scope.data.postalcodes[0].adminName1;
						$scope.edo = estado;
						$scope.mun = municipio;

						
					})
					.error(function(err){
						//console.log(err);
						console.log('se termino tu licencia')

					})*/

					/*promesa*/
					$scope.load = function(res) {
						servicios.Postal(codigo).then(
						function(res){
							console.log(res);
							$scope.data = res;
							var municipio = $scope.data.postalcodes[0].adminName2;
							var estado = $scope.data.postalcodes[0].adminName1;
							$scope.edo = estado;
							$scope.mun = municipio;
						},function(res){
							console.log(res);
						})
					}

					$scope.load();
					/*promesa*/


			}
			
		}

		/*$scope.pdf = function () {
				console.log('dentro pdf');
				var canvas = document.getElementById('div');
			     // save canvas image as data url (png format by default)
			     var dataURL = canvas;

			     var imgData = dataURL;

			     var doc = new jsPDF();
			     doc.addImage(imgData, 'JPEG', 15, 40);

			     doc.save('role.pdf');
			}*/
		/*var cod = 40020;
		console.log(cod);
		servicios.Postal(cod)
			.success(function (res){
				$scope.data = res;
				console.log($scope.data);
				
			})
			.error(function(err){
				console.log(err);
			})*/

}]);