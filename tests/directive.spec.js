describe('directive', function() {
  var element
    , compiled
    , $timeout
    , $window
    , windowElm
    , $document
    , $q
    , $compile
    , $controller
    , $controllerProvider
    , $rootScope
    , scope
    , _mkController

  beforeEach(function() {
    angular
      .module('srph.infinite-scroll.test', [])
      .config(function(_$controllerProvider_) { $controllerProvider = _$controllerProvider_ });

    beforeEach(module('srph.infinite-scroll'));

    inject(function(_$q_, _$window_, _$document_, _$timeout_, _$controller_, _$rootScope_) {
      var $q = _$q_,
        , $window = _$window_
        , windowElm = angular.element($window)
        , $document = _$document_
        , $compile = _$compile_
        , $timeout = _$timeout_
        , $controller = _$controller_
        , $rootScope = _$rootScope_
        , _mkController = function(controller) {
          $controllerProvider.register('TestController', controller);
        };
    }));
  });

  // YOLO
  it('should pass', function() {
    expect(true).toBe(true);
  });

  describe('scroll handler / infinite scroll', function() {
    describe('halt execution', function() {
      it('should halt when disabled', function() {
        element = mkelm({ disabled: true });
        e.scroll(windowElement);
      });

      it('should not halt callback when scope.disabled is undefined', function() {
        element = mkelm();
        e.scroll(windowElement);
      });

      it('should not halt callback when scope.disabled is false', function() {
        element = mkelm();
        e.scroll(windowElement);
      });

      it('should halt when promise is not null', function() {
        element = mkelm();
      });
    });

    describe('trigger when the scroll reaches the bottom + threshold', function() {
      describe('trigger', function() {
        it('should trigger for window');
        it('should trigger for parent container');
        it('should trigger for HTMLElement (where the directive is applied)');
        it('should trigger for element');
        it('should trigger for element (string)');
      });

      it('should execute callback in <throttle-ms> (e.g, 500ms)');
      it('should assign promise to null only after the callback is finished (testing async)');
    });
  });
});

function _mkElm(options) {
  options = options || {};
  var disabled = options.disabled;
  var throttle = options.throttle;
  var immediate = options.immediate;
  var container = options.container;
  var threshold = options.threshold;
  var children = options.children;

  return angular.element([
    '<div ',
      'srph-infinite-scroll="', optons.callback, '()"',
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
  var windowBottom = e.prop('scrollHeight');
  e.scroll( windowBottom - t );
}