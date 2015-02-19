/**
 * angular-infinite-scroll
 * @author Kier Borromeo (srph)
 * @repository https://github.com/srph/angular-infinite-scroll
 * @license MIT
 */
+function(angular, undefined) {
  'use strict';
  angular
    .module('srph.infinite-scroll', [])
    .directive('srphInfiniteScroll', directive);

  function directive($window, $document, $timeout, $q) {
    return {
      scope: {
        callback: '&srphInfiniteScroll',
        disabled: '=',
        container: '=',
        threshold: '=',
        throttle: '='
        // immediate: '='
      },

      restrict: 'EA',
      link: linkFn
    };

    function linkFn(scope, element, attributes) {
      var _windowElm = angular.element($window);
      var _docElm = angular.element($document);
      var _bodyElm = angular.element('html, body');

      var promise = null;
      var callback = scope.callback;
      var threshold = scope.threshold || 200;
      var throttle = scope.throttle || 350;
      // var immediate = !!scope.immediate || true;

      var $container = $getContainer(scope.container);
      var isContainerElm = $container == element;
      var isContainerBody = $container == _bodyElm;
      var $scrollingContainer = isContainerBody ?  _windowElm : element;

      // Flag whether the vertical scroll position changed.
      // Why? Horizontal scroll shouldn't trigger the damn thing.
      var _last_scroll = 0;

      $scrollingContainer.on('scroll', $handle); // Scroll event listener
      scope.$on('$destroy', $handleUnbind) // Scope listener
      
      /**
       * Binds the scroll event listener
       * which triggers the infinite scroll.
       *
       * It just calls the callback after the provided
       * scrolling. ... `
       */
      function $handle(evt) {
        var height = $scrollingContainer.innerHeight(); // Container height
        var scroll = $scrollingContainer.scrollTop(); // The amount of scrolling
        var bottom = $container.prop('scrollHeight'); // Container height + amount of scrolling

        // Halt the execution if the disabled flag is set and true
        // or if the execution is still running
        var disabled = scope.disabled;
        if ( ( promise !== null && (!angular.isUndefined(disabled) && !!disabled) )
          && _last_scroll == scroll) {
          return;
        }

        // Update the last vertical scroll position
        _last_scroll = scroll;

        // scrollHeight - height = scroll offset
        if ( scroll + threshold >= bottom - height ) {
          promise = $timeout(function() {
            // We use $q.when to set the `promise` flag (if the callback is still running)
            // to null (set the flag as done / no execution is running) so async
            // shit is considered.
            // `finally` block so incase the promise was rejected or whatever.
            $q.when(callback()).finally(function() { promise = null });
          }, throttle, true);
        }
      }

      /**
       * Unbinds the scroll event listener when
       * the scope is destroyed
       */
      function $handleUnbind() {
        $container.unbind('scroll', $handle);
      }

      /**
       * Returns the container based on the `container` parameter.
       */
      function $getContainer(container) {
        if ( angular.isUndefined(container) ) return _bodyElm;
        if ( !!container ) return element;

        throw new Error('Container option is not accepted.');
      }
    }
  }
  directive.$inject = ['$window', '$document', '$timeout', '$q'];
}(angular);