describe('directive', function() {
  beforeEach(module('app'));

  var element, $timeout, $window, $document, $q;
  beforeEach(inject(function(_$q_, _$window_, _$document_, _$timeout_) {
    var $q = _$q_,
      , $window = _$window_
      , $document = _$document_
      , $timeout = _$timeout_;
  }));

  // YOLO
  it('should pass', function() {
    expect(true).toBe(true);
  });

  describe('scroll handler / infinite scroll', function() {
    describe('halt execution', function() {
      it('should not scroll when disabled');
      it('should not scroll when scope.disabled is undefined');
      it('should not scroll when promise is not null');
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