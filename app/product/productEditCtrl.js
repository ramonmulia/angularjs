(function() {
	angular
		.module("ProductManagement")
		.controller("ProductEditCtrl", ["product", function(product) {
			var vm = this;

			vm.product = product;

			if(vm.product){
				vm.title = "Edit: "+vm.product.productName; 
			}
			else{
				vm.title = "New Product";
			}
		}]);
})();