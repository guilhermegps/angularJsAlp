//cria um controller no módulo alurapic
angular.module('alurapic').controller('FotosController', function($scope, $http) { // $http é um serviço do angular responsável por requisições ajax
  $scope.fotos = [];

  $http.get('v1/fotos') // endereço para buscar
    .success(fotos => $scope.fotos=fotos)
    .error(erro => console.log(erro));

  // let promise = $http.get('v1/fotos'); // endereço para buscar
  // promise.then(retorno => {
  //   $scope.fotos = retorno.data;
  // }).catch(erro => console.log(erro));
});
