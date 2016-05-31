angular.module('miServices', [])
	.factory('servicios', ['$http', function ($http) {
		return {
			//var url = 'http://api.geonames.org/postalCodeLookupJSON?postalcode='+codigo+'&country=MX&username=demo';
			/**
			**promesa*/
			/***
			*/

			Api: function () {
				return $http.get('http://api.tvmaze.com/shows');
			},
			Postal : function (codigo) {
				return $http.get('http://api.geonames.org/postalCodeLookupJSON?postalcode='+codigo+'&country=MX&username=demo');
			},
			Datos: function (datos) {
				return $http.post('/usuario',datos);
			},
			Alldatos: function () {
				return $http.get('/usuarios');
			},
			update: function (nom,data) {
				return $http.put('/usuarioUpdate/' + nom,data);
			},
			delete: function(nom) {
				return $http.delete('/elimina/' + nom);
			}
		}
}])