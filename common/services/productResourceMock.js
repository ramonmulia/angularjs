(function() {
	"use strict";

	var app = angular.module("productResourceMock", ["ngMockE2E"]);

	app.run(function($httpBackend) {
		var products =
			products = [{
				"productId": 1,
				"productName": "Queijo",
				"productImage": "http://guiadoempreendedor.makro.com.br/wp-content/uploads/2013/04/makro_atacadista_como_conservar_servir_frios_sexta_2.jpg"
			}, {
				"productId": 2,
				"productName": "Sorvete",
				"productImage": "http://www.didu.com.br/wp-content/uploads/2014/01/sorvete.jpg"
			},
			 {
				"productId": 3,
				"productName": "Cerveja",
				"productImage": "http://aquiemsaqua.com.br/wp-content/uploads/2015/03/cerveja-gelada.jpg"
			}, {
				"productId": 4,
				"productName": "Cachaça",
				"productImage": "http://etilicos.com/wp-content/uploads/2014/02/cachaca-serie-a-casa-angelina-cambuci.jpg"
			}, {
				"productId": 5,
				"productName": "Arroz",
				"productImage": "http://temperaria.com.br/wp-content/uploads/2012/05/arrozbasmati_1.jpg"
			}];

		var productUrl = "/api/products";

		$httpBackend.whenGET(productUrl).respond(products);

	});
}());