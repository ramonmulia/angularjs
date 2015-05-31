(function() {
	"use strict";
	var app = angular.module("ProductManagement", ["common.services", "ui.router", "productResourceMock", "ui.mask","ui.bootstrap"]);

	app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/");

		$stateProvider.state("home", {
			url: "/",
			templateUrl: "/views/welcomeView.html"
		})

		.state("productList", {
			url: "/products",
			templateUrl: "/app/product/productListView.html",
			controller: "ProductCtrl as vm"
		})


		.state("productDetail", {
			url: "/products/:productId",
			templateUrl: "/app/product/productDetailView.html",
			controller: "ProductDetailCtrl as vm",
			resolve: {
				productResource: "productResource",

				product: function(productResource, $stateParams) {
					var productId = $stateParams.productId;

					return productResource.get({
						productId: productId
					}).$promise;
				}

			}
		})

		.state("productEdit", {
			abstract: true,
			url: "/product/edit/:productId",
			templateUrl: "app/product/productEditView.html",
			controller: "ProductEditCtrl as vm",
			resolve: {
				productResource: "productResource",

				product: function(productResource, $stateParams) {
					var productId = $stateParams.productId;

					return productResource.get({
						productId: productId
					}).$promise;
				}
			}
		})

		.state("productEdit.info", {
			url: "/info",
			templateUrl: "app/product/productEditInfoView.html"
		})

		.state("productEdit.price", {
			url: "/price",
			templateUrl: "app/product/productEditPriceView.html"
		})

		.state("productEdit.tags", {
			url: "/tags",
			templateUrl: "app/product/productEditTagsView.html"
		});

	}]);
}());