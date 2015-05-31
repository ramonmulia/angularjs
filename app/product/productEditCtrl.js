(function() {
	angular
		.module("ProductManagement")
		.controller("ProductEditCtrl", ["product", "$state", function(product,$state) {
			var vm = this;

			vm.product = product;

			if(vm.product.productName){
				vm.title = "Edit: "+vm.product.productName; 
			}
			else{
				vm.title = "New Product";
			}

			vm.open = function($event){
				$event.preventDefault();
				$event.stopPropagation();

				vm.opened = !vm.opened;
			}

			vm.cancel = function(){
				$state.go('productList');
			}

			vm.submit = function(){
				vm.product.$save();
			}

		}]);
})();