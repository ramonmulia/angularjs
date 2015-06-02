(function() {
	angular
		.module("ProductManagement")
		.controller("ProductEditCtrl", ["product", "$state", function(product, $state) {
			var vm = this;

			vm.product = product;
			if (vm.product.productName) {
				vm.title = "Edit: " + vm.product.productName;
			} else {
				vm.title = "New Product";
			}

			vm.open = function($event) {
				$event.preventDefault();
				$event.stopPropagation();

				vm.opened = !vm.opened;
			}

			vm.cancel = function() {
				$state.go('productList');
			}

			vm.submit = function() {
				vm.product.$save(function(data){
					toastr.success("Save successful");
				});
			}

			vm.addTags = function(tags) {
				if (tags) {
					var array = tags.split(',');
					vm.product.tags = vm.product.tags ? vm.product.tags.concat(array) : array;
					vm.newTags = "";
				} else {
					alert("Please enter one or more tags separated by commas");
				}
			}

			vm.removeTag = function(indx) {
				vm.product.tags.reverse();
				vm.product.tags.splice(indx, 1);
			}

		}]);
})();