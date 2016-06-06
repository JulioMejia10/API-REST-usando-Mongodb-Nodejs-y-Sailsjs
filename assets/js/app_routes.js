angular.module('rutas', ['ui.router','App','miServices'])
	.config(['$stateProvider', '$urlRouterProvider', 'servicios', function ($stateProvider, $urlRouterProvider, servicios){
		
		$urlRouterProvider.otherwise('/principal');
		//
		// Set up the states
		$stateProvider
			.state('pagina1',{
				url:'/pagina',
				views: {
					templateUrl:'templates/pagina1.html'
				}
			})
			.state('url', {
				url: '/index2',
				templateUrl: 'templates/url.html',
				controller: ''

			})
			.state('urlArticulo', {
				url:'/index/:param',
				templateUrl: 'templates/indexParams.html',
				controller:'indexParam'
			})
			.state('datos', {
				url:'/datos',
				templateUrl: 'templates/datos.html',
				controller:'datos'
			})
	}])