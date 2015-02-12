+function(angular, undefined) {
  angular
    .module('app', ['srph.infinite-scroll'])
    .controller('ContainerController', ContainerController)
    .controller('WindowController', WindowController);

  function ContainerController($scope) {

  }

  function WindowController($scope) {
    
  }
}(angular);