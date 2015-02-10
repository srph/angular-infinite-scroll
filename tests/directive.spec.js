describe('directive', function() {
  var element
    , compiled
    , $timeout
    , bodyElm
    , $q
    , $compile
    , $controller
    , $controllerProvider
    , $rootScope
    , $scope
    , spyEvt
    , _mkController

  beforeEach(function() {
    angular
      .module('srph.infinite-scroll.test', [])
      .config(function(_$controllerProvider_) { $controllerProvider = _$controllerProvider_ });

    module('srph.infinite-scroll', 'srph.infinite-scroll.test');

    inject(function(_$compile_, _$q_, _$timeout_, _$controller_, _$rootScope_) {
      $q = _$q_;
      $compile = _$compile_;
      $timeout = _$timeout_;
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();
      _mkController = function(controller) {
        $controllerProvider.register('TestController', controller || function($scope) {
          $scope.callback = angular.noop;
        });
      };
    });

    bodyElm = angular.element('html, body');
    bodyElm.height(750);
  });

  // YOLO
  it('should pass', function() {
    expect(true).toBe(true);
  });

  describe('scroll handler / infinite scroll', function() {
    describe('halt execution', function() {
      it('should halt when disabled', function() {
        _mkController();
        var controller = $controller('TestController', { $scope: $scope });
        element = _mkElm({ disabled: true });
        // spyOn($scope, 'callback');
        scroll(element);
        // expect($scope.callback).toHaveBeenCalled();
        $timeout.flush()
      });

      it('should not halt callback when scope.disabled is undefined', function() {
        element = _mkElm();
        scroll(element);
      });

      it('should not halt callback when scope.disabled is false', function() {
        element = _mkElm();
        scroll(element);
      });

      it('should halt when promise is not null', function() {
        element = _mkElm();
      });
    });

    describe('trigger when the scroll reaches the bottom + threshold', function() {
      describe('trigger', function() {
        it('should trigger for window');

        it('should trigger for element', function() {
          element = _mkElm({ container: true });
          compiled = compile(element);
          scroll(compiled);
        });
      });

      it('should execute callback i qn <throttle-ms> (e.g, 500ms)', function() {

      });

      it('should assign promise to null only after the callback is finished (testing async)', function() {

      });
    });
  });

  function _mkElm(options) {
    options = options || {};
    var callback = options.callback;
    var disabled = options.disabled;
    var throttle = options.throttle;
    var immediate = options.immediate;
    var container = options.container;
    var threshold = options.threshold;
    var children = options.children;

    return angular.element([
      '<div ',
        'srph-infinite-scroll="callback()"',
        'style="height: 500px; overflow: scroll"; width: 100%;',
        disabled !== undefined ? 'disabled="' + disabled + '"' : '',
        throttle !== undefined ? 'throttle="' + throttle + '"' : '',
        immediate !== undefined ? 'immediate="' + immediate + '"' : '',
        container !== undefined ? 'container="' + container + '"' : '',
        threshold !== undefined ? 'threshold="' + threshold + '"' : '',
        '>',
        children,
      '</div>'
    ].join(' '));
  }

  function scroll(e, t) {
    expect( e.scrollTop() ).toBe(0);
    var bottom = e.prop('scrollHeight');
    var height = e.height();
    var s = Math.abs((bottom - height <= 0 ? bottom : bottom - height)) - (t || 0);
    e.scrollTop( s );
    e.scroll();
    e.triggerHandler('scroll');
    expect( e.scrollTop() ).toBe(s);
  }

  function compile(e) {
    var c = $compile( e )($scope);
    $scope.$digest();
    return c;
  }
});