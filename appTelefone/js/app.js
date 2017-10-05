

angular.module("ListaTelefonica", []);
angular.module("ListaTelefonica").controller("ListaTelefonicaController", function ($scope, $http) {

	$scope.app = "Lista Telefonica";
	$scope.contatos = [];
	$scope.operadoras = [];

	var carregarContatos = function () {
		$http.get('http://localhost:3000/contatos').then(function (success) {
			//console.log(data);
			$scope.contatos = success.data;
		})
	}

	var carregarOperadoras = function () {
		$http.get('http://localhost:3000/operadoras').then(function (success) {
			//console.log(data);
			$scope.operadoras = success.data;
		})
	}

	$scope.addContato = function (contato) {
		contato.data = new Date();
		$http.post('http://localhost:3000/contatos', contato).then(function (success) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
	}

	$scope.deleteContatos = function (contatos) {

		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return true;
		});
		console.log("Contato(s) Deletados");
	}

	$scope.IsContatoSelecionado = function (contatos) {
		return contatos.some(function (contato) {
			return contato.selecionado;
		})
	}

	$scope.ordenarCampo = function (campo) {
		$scope.campOrder = campo;
		$scope.tipoOrdenacao = !$scope.tipoOrdenacao;
	}

	carregarContatos();
	carregarOperadoras();
});

