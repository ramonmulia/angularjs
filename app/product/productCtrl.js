(function() {
	angular
		.module("ProductManagement")
		.controller("ProductCtrl", ["productResource", function(productResource) {
			var vm = this;

			productResource.query(function(data) {
				vm.products = data
			});



			vm.showImage = false;

			vm.toogleImage = function() {
				vm.showImage = !vm.showImage;
			};
		}]);
})();