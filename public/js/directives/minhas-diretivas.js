angular.module('minhasDiretivas', [])
  .directive('meuPainel', () => {//Criando minha diretiva
    //Directive Definition Object - DDO
    let ddo = {};

    ddo.restrict = "AE"; // AE Attribute/Element

    ddo.scope = {
      titulo: '@' // Diretiva com escopo privado e que recebe titulo como poarâmetro
    };

    ddo.transclude = true; // Para que a minha diretiva mantenha os elementos filhos

    //Especifico o html que será substituido na diretiva
    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
  })
