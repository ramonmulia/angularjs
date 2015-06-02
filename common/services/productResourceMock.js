(function() {
	"use strict";

	var app = angular.module("productResourceMock", ["ngMockE2E"]);

	app.run(function($httpBackend) {
		var products =
			products = [{
				"productId": 1,
				"productName": "Queijo",
				"imageUrl": "http://guiadoempreendedor.makro.com.br/wp-content/uploads/2013/04/makro_atacadista_como_conservar_servir_frios_sexta_2.jpg",
				"productCode" : "GNDK - LJASNC",
				"productDescription" : "Arroz",
				"price" : 20,
				"releaseDate" : new Date(),
				"tags" : ["papa","fezes"]
			}, {
				"productId": 2,
				"productName": "Sorvete",
				"imageUrl": "http://www.didu.com.br/wp-content/uploads/2014/01/sorvete.jpg",
				"productCode" : "GNDK - LJASNC",
				"productDescription" : "Sorvetao",
				"price" : 20.45,
				"releaseDate" : new Date(),
				"tags" : []
			}, {
				"productId": 3,
				"productName": "Cerveja",
				"imageUrl": "http://aquiemsaqua.com.br/wp-content/uploads/2015/03/cerveja-gelada.jpg",
				"productCode" : "GNDK - LJASNC",
				"productDescription" : "bREJA GELADA",
				"price" : 20.45,
				"releaseDate" : new Date(),
				"tags" : []
			}, {
				"productId": 4,
				"productName": "Cachaça",
				"imageUrl": "http://etilicos.com/wp-content/uploads/2014/02/cachaca-serie-a-casa-angelina-cambuci.jpg",
				"productCode" : "GNDK - LJASNC",
				"productDescription" : "Cachaça da boa",
				"price" : 20.45,
				"releaseDate" : new Date(),
				"tags" : []
			}, {
				"productId": 5,
				"productName": "Arroz",
				"imageUrl": "http://temperaria.com.br/wp-content/uploads/2012/05/arrozbasmati_1.jpg",
				"productCode" : "GNDK - LJASNC",
				"productDescription" : "Arroz",
				"price" : 20.45,
				"releaseDate" : new Date(),
				"tags" : []
			}];

		var productUrl = "/api/products";
		var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*", "");

		$httpBackend.whenPOST(productUrl).respond(function (method,url,data){
			var product = angular.fromJson(data);

			if(!product.productId){
				product.productId = products[products.length - 1].productId + 1;
				products.push(product);
			}
			else{
				for (var i = 0; i < products.length; i++) {
					if(products[i].productId == product.productId){
						products[i] = product;
					}
				}
			}

			return [200,product,{}]

		});

		$httpBackend.whenGET(productUrl).respond(products);

		$httpBackend.whenGET(editingRegex).respond(function(method, url, data) {
			var product = {
				"productId": 0,
				"releaseDate" : new Date(),
				"tags" : ""
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
		$httpBackend.whenGET(/views/).passThrough();
	});
}());