(function() {
	angular
		.module("ProductManagement")
		.controller("ProductCtrl",
			function() {
				var vm = this;
				vm.products =
					products = [{
						"productId": 1,
						"productName": "Pamonha",
						"productImage": "http://www.ecommerceone.com.br/clientes/diretodeminas/Figuras/Fotos/pamonha-doce-com-queijo-canastra-150-338.jpg"
					}, {
						"productId": 2,
						"productName": "Sorvete",
						"productImage": "http://www.didu.com.br/wp-content/uploads/2014/01/sorvete.jpg"
					}];

				vm.showImage = false;

				vm.toogleImage = function() {
					vm.showImage = !vm.showImage;
				};
			});
})();