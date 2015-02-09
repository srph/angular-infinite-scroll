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
        callback: '&srInfiniteScroll',
        disabled: '=',
        container: '=',
        threshold: '=',
        throttle: '=',
        immediate: '='
      },

      restrict: 'EA',
      link: linkFn
    };

    function linkFn(scope, element, attributes) {
      var promise = null;
      var callback = scope.callback;
      var threshold = scope.threshold || 100;
      var throttle = scope.throttle || 350;
      var immediate = !!scope.immediate || true;
      var $container = $getContainer(scope.container);

      $container.on('scroll', $handle); // Scroll event listener
      scope.$on('$destroy', $handleUnbind) // Scope listener

      /**
       * Binds the scroll event listener
       * which triggers the infinite scroll.
       *
       * It just calls the callback after the provided
       * scrolling. ... `
       */
      function $handle(evt) {
        // Halt the execution if the disabled flag is set and true
        // or if the execution is still running
        var disabled = scope.disabled;
        if ( (!angular.isUndefined(disabled) && !!disabled ) || promise !== null ) {
          return;
        }

        var height = $container.height(); // Container height
        var scroll = $container.scrollTop(); // The amount of scrolling
        var scrollHeight = $container.prop('scrollHeight'); // Container height + amount of scrolling

        // scrollHeight - height = scroll offset
        if ( scroll + threshold > scrollHeight - height ) {
          promise = $timeout(function() {
            // We use $q.when to set the `promise` flag (if the callback is still running)
            // to null (set the flag as done / no execution is running) so async
            // shit is considered
            $q.when(callback()).then(function() { promise = null });
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
       *
       */
      function $getContainer(container) {
        var _container = (function() {
          switch( container ) {
            case !!( angular.isUndefined(container) ): return $document;
            case !!( container instanceof HTMLElement ): return container;
            case !!( container === true || container === false ): return element;
            case !!( angular.isString(container) ): return container == 'parent'
              ? element.parent()
              : $document.querySelector(container)
          }
        })();

        return angular.element(_container);
      }
    }
  }
}(angular);