(function(){
"use strict";

angular.module("ProductManagement").controller("ProductDetailCtrl",["product", ProductDetailCtrl] )

function ProductDetailCtrl(product){
	var vm = this;

	vm.product = product;

	vm.title = "Product Detail: "+vm.product.productName;

	if(vm.product.tags){
		vm.product.taglist = vm.product.tags.toString();
	}
}

}());