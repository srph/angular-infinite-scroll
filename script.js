+function(angular, undefined) {
  angular
    .module('app', ['ui.router', 'srph.infinite-scroll'])
    .config(statesBlock)
    .controller('ContainerController', ContainerController)
    .controller('WindowController', WindowController);

  function statesBlock($stateProvider) {

    var example = {
      name: 'example'
      url: '',
      abstract: true
    };

    var home = {
      parent: 'example'
      name: 'home',
      url: '/'
    };

    var win = {
      parent: 'example',
      name: 'window',
      url: '/window'
    };

    var con = {
      parent: 'example',
      name: 'container',
      url: '/container'
    };

    $stateProvider.state(example);
    $stateProvider.state(home);
    $stateProvider.state(win);
    $stateProvider.state(con);
  }

  function ContainerController($scope) {

  }

  function WindowController($scope) {
    
  }
}(angular);