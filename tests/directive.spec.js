describe('directive', function() {
  var element
    , compiled
    , $timeout
    , $window
    , windowElm
    , bodyElm
    , $document
    , $q
    , $compile
    , $controller
    , $controllerProvider
    , $rootScope
    , $scope
    , scope
    , _mkController

  beforeEach(function() {
    angular
      .module('srph.infinite-scroll.test', [])
      .config(function(_$controllerProvider_) { $controllerProvider = _$controllerProvider_ });

    module('srph.infinite-scroll');

    inject(function(_$compile_, _$q_, _$window_, _$document_, _$timeout_, _$controller_, _$rootScope_) {
      $q = _$q_;
      $window = _$window_
      windowElm = angular.element($window)
      $document = _$document_
      $compile = _$compile_
      $timeout = _$timeout_
      $controller = _$controller_
      $rootScope = _$rootScope_
      $scope = $rootScope.$new()
      _mkController = function(controller) {
        $controllerProvider.register('TestController', controller);
      };
    });

    bodyElm = angular.element('body');
  });

  // YOLO
  it('should pass', function() {
    expect(true).toBe(true);
  });

  describe('scroll handler / infinite scroll', function() {
    describe('halt execution', function() {
      it('should halt when disabled', function() {
        element = _mkElm({ disabled: true });
        scroll(element);
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
        it('should trigger for window', function () {
          element = _mkElm();
          compiled = compile(element);
          scroll( bodyElm );
        });

        it('should trigger for parent container', function() {
          bodyElm.append('<div id="parent"></div>');
          var parent = bodyElm.children('#parent');
          element = _mkElm({ container: 'parent' });

          parent.append(element);
          compiled = compile(parent);
          scroll(compiled);
        });

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
        'srph-infinite-scroll="', callback, '()"',
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
    var bottom = e.prop('scrollHeight');
    e.scroll( bottom - t );
  }

  function compile(e) {
    var c = $compile( angular.element('<div></div>') )($scope);
    $scope.$digest();
    return c;
  }
});