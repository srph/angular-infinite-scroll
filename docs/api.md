# API

- [```srph-infinite-scroll```](#srph-infinite-scroll-expression)
- [```disabled```](#disabled-boolean-default-false)
- [```throttle```](#throttle-number-default-350)
- [```threshold```](#threshold-number-default-200)
- [```container```](#container-boolean)

##### ```srph-infinite-scroll``` (```expression```)

Callback to be evaluated (expression to be evaluated) when the current scroll position reaches the *bottom*.

\* If the callback runs an asynchronous method (```$http```), please make sure to return the promise like so:

```js
$scope.myCallback() = function() {
  return $http.get('api/v1/..')
    .then(onSuccess)
    .catch(onError);
}
```

Failing to do so, unexpected behaviors may occur.

[Back to top](#content)

##### ```disabled``` (```boolean```, *default*: ```false```)

Disable callback from being executed.

[Back to top](#content)

##### ```throttle``` (```number```, *default*: ```350```)

Delays the execution of the callback

[Back to top](#content)

##### ```threshold``` (```number```, *default*: ```200```)

Scroll allowance for executing the callback when reaching the bottom. This allows you to get the callback executed even before reaching the bottom.

[Back to top](#content)

##### ```container``` (```boolean```)

Use the container (element which the directive was applies to) for the infinite scrolling instead of the window. Set ```true``` to use the element which the directive is applied to; leave as blank to use the ```body``` / ```$window```.

The example below illustrates that ```myCallback()``` will be executed when the ```div``` is scrolled to the bottom:

```html
<div style="overflow: scroll; height: 500px;" srph-infinite-scroll="myCallback()" container="true">
  <ul>
    <li> ng-repeat="apple in apples"> {{ apple.name }} </li>
  </ul>
</div>
```
