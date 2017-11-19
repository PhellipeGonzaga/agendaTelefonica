app.controller("TelefonesCtrl", function ($scope, $http, $scope, Telefone, ngProgress, toaster) {

	$scope.operadoras = [
		{ nome: "Oi", codigo: 14, categoria: "Celular" },
		{ nome: "Tim", codigo: 15, categoria: "Celular" },
		{ nome: "Vivo", codigo: 16, categoria: "Celular" },
		{ nome: "NET", codigo: 18, categoria: "Fixo" },
		{ nome: "GVT", codigo: 32, categoria: "Fixo" }
	];

	$scope.add = function (telefone) {
		telefone.data = new Date();
		Telefone.save(telefone, function (telefone) {
			refresh();
		});
	};

	function getAll() {
		$scope.contatos = Telefone.query();
	}

	function refresh() {
		getAll();
		//Implement methods that control the page for each action
		//clearFields();
		//disableButtons();
	}

	function init() {
		refresh();
	}

	init();
});

