app.controller("TelefonesCtrl", function ($scope, $http, $scope, Telefone, ngProgress, toaster) {

	$scope.operadoras = [
		{ nome: "Oi", codigo: 14, categoria: "Celular" },
		{ nome: "Tim", codigo: 15, categoria: "Celular" },
		{ nome: "Vivo", codigo: 16, categoria: "Celular" },
		{ nome: "NET", codigo: 18, categoria: "Fixo" },
		{ nome: "GVT", codigo: 32, categoria: "Fixo" }
	];


	$scope.salvar = function (contato){
		contato.data = new Date();
		
				contato.operadora = $scope.operadoras.find(function (c) {
					if (c.codigo===contato.operadora.codigo) return true;
				});
				
		if (contato.hasOwnProperty('_id')) {
			update(contato);
		} else {
			add(contato);
		}
	}

	function add(contato) {
		Telefone.save(contato, function (contato) {
			refresh();
		});
	};

	function update(contato) {
		contato.$update(function(){
			refresh();
		});
	};

	$scope.remove = function (telefone) {
		telefone.$delete(function () {
			refresh();
		});
	};

	$scope.populateForm = function(contato) {
		$scope.contato = Telefone.get({ id: contato._id });
	};

	function getAll() {
		$scope.contatos = Telefone.query();
	}

	function refresh() {
		getAll();
		//Implement methods that control the page for each action
		clearFields();
		//disableButtons();
	}

	function clearFields(){
		$scope.contato = {};
	}

	$scope.ordenarCampo = function (campo){
		$scope.campOrder = campo;
		$scope.tipoOrdenacao = !$scope.tipoOrdenacao;
	}

	function init() {
		refresh();
	}

	init();
});

