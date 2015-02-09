describe('directive', function() {

  describe('scroll handler / infinite scroll', function() {
    describe('halt execution', function() {
      it('should not scroll when disabled');
      it('should not scroll when scope.disabled is undefined');
      it('should not scroll when promise is not null');
    });

    it('should trigger when the scroll reaches the bottom + threshold');
  });
});