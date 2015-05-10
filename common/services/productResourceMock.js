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
			}, {
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
		var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*", "");


		$httpBackend.whenGET(productUrl).respond(products);

		$httpBackend.whenGET(editingRegex).respond(function(method, url, data) {
			var product = {
				"productId": 0
			};
			var parameters = url.split('/');
			var length = parameters.length;
			var id = parameters[length - 1];

			if (id > 0) {
				for (var i = 0; i < products.length; i++) {
					if (products[i].productId == id) {
						product = products[i];
						break;
					};
				};
			}
			return [200, product, {}];
		});

		$httpBackend.whenGET(/app/).passThrough();
		$httpBackend.whenGET(/img/).passThrough();
	});
}());