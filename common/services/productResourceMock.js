(function() {
	"use strict";

	var app = angular.module("productResourceMock", ["ngMockE2E"]);

	app.run(function($httpBackend) {
		var products =
			products = [{
				"productId": 1,
				"productName": "Pamonha",
				"productImage": "http://www.ecommerceone.com.br/clientes/diretodeminas/Figuras/Fotos/pamonha-doce-com-queijo-canastra-150-338.jpg"
			}, {
				"productId": 2,
				"productName": "Sorvete",
				"productImage": "http://www.didu.com.br/wp-content/uploads/2014/01/sorvete.jpg"
			}];

		var productUrl = "/api/products";

		$httpBackend.whenGET(productUrl).respond(products);

	});
}());