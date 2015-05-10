(function() {
	"use strict";
	var app = angular.module("ProductManagement", ["common.services", "ui.router", "productResourceMock", "ngMaterial"]);

	app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/");

		$stateProvider.state("home", {
			url: "/",
			templateUrl: "views/welcomeView.html"
		})

		.state("productList", {
			url: "/products",
			templateUrl: "/app/product/productListView.html",
			controller: "ProductCtrl as vm"
		})

		.state("productEdit", {
			url: "/products/edit/:productId",
			templateUrl: "/app/product/productEditView.html",
			controller: "ProductEditCtrl as vm"
		});
	}]);
}());