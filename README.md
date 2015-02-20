# angular-infinite-scroll

[![Build Status](https://travis-ci.org/srph/angular-infinite-scroll.svg?branch=master)](https://travis-ci.org/srph/angular-infinite-scroll)
[![Bower version](https://badge.fury.io/bo/angular-srph-infinite-scroll.svg)](http://badge.fury.io/bo/angular-srph-infinite-scroll)
[![Author | Shields.io](http://img.shields.io/badge/author-%40srph-blue.svg?style=flat-square)](http://twitter.com/_srph)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

A simple infinite scroll solution for AngularJS weighing < ```1 KB``` (minified).

## Content

- [Important Notes](#important-notes)
  - [Why another Infinite Scroll solution?](#why-another-infinite-scroll-solution)
  - [Status](#status)
  - [Versioning](#versioning)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Examples](#examples)
- [API](#api)
  - [```srph-infinite-scroll```](#srph-infinite-scroll-expression)
  - [```disabled```](#disabled-boolean-default-false)
  - [```throttle```](#throttle-number-default-350)
  - [```threshold```](#threshold-number-default-200)
  - [```container```](#container-boolean)
- [Contributing](#contributing)
  - [Building](#building)
  - [Coding Style](#coding-style)
- [Changelogs](#changelogs)

## Important Notes

[Back to top](#content)

### Why another Infinite Scroll solution?

- [sroze/ngInfiniteScroll](https://github.com/sroze/ngInfiniteScroll) is an okay solution, however it seems to not support infinite scrolling for containers, and has oudated documentation.
- The author of the mentioned library is difficult to contact (no twitter, mail seems down, and busy according to his Github activity).
- Some part of the internal code just doesn't make sense to me.
- It Just Works™.
- Why not?
- I don't know at all.

One thing is that it's not better.

[Back to top](#content)

### Limitation

- No tests yet. 
- Does not yet support responsive thresholds.
- Does not support horizontal scrolling. Callback will not be executed.
- Does not support arrows, touches. Not just yet.
- Aims to be simple as much as it can.

### Status

All tests are failing because I suck. Please send a PR, thanks.

**Todo**

- [/] Tests
- [x] Automation
- [x] Documentation
- [x] Examples
- [ ] React to key presses
- [ ] React to touches
- [ ] Removal of jQuery as dependency
- [ ] Support for responsive apps (threshold, lel)

*Legend*: ```/```: almost -- ```x``` done

[Back to top](#content)

### Versioning

This library follows [Semantic Versioning](http://semver.org/). All major versions will bump the ```MINOR``` in *SemVer* until ```v1.0``` like so:

- ```x.1.0``` is a major version
- ```x.1.2``` is not a major version
- ```x.2.0``` is a major version
- ```x.2.69``` is not a major version

Latest versions are beta releases and are subject to change; also not recommended for production (although I am using it on an enterprise project).

## Getting Started

Getting started is very easy!

[Back to top](#content)

**Requirements**

- AngularJS ```>=v1.2.0``` (Should work with)
- jQuery (at least) ```>=v.1.7``` (Planned in the future to be removed)

### Installation

```angular-infinite-scroll``` is available on **Bower**:

```
$ bower install angular-srph-infinite-scroll --save
```

\* *The purpose of the ```--save``` argument is to add it your bower file's dependencies.*

```angular-infinite-scroll``` is also available on **CDN**(s):

- **Raw GIT**
```html
<script src="https://cdn.rawgit.com/srph/angular-infinite-scroll/master/dist/angular-srph-infinite-scroll.js"></script>
<!-- min -->
<script src="https://cdn.rawgit.com/srph/angular-infinite-scroll/master/dist/angular-srph-infinite-scroll.min.js"></script>
```

**Include the script to your HTML file after jQuery and AngularJS (*must be in proper order*).**

```html
<!-- other scripts -->
<script src="/path/to/jquery.js"></script>
<script src="/path/to/angular.js"></script>
<script src="/path/to/angular-srph-infinite-scroll.js"></script>
```

**Add the library module to one of your app module's dependencies.**

```js
angular.module('myApp', [/** other dependencies */, 'srph.infinite-scroll']);
```

[Back to top](#content)

### Usage

Use the directive on a container element.

```html
<div srph-infinite-scroll="callback()"
  {disabled="true"}
  {container="true"}
  {throttle="0"}
  {threshold="200"}>
  <!-- your ng-repeat, typically -->
  <div ng-repeat="apple in apples"> {{ apple.name }} </div>
</div>
```

\* The ```{```/```}``` enclosures indicate that the parameter is optional.

Head over to the [API](#api) to see accepted parameters, and how to use each.

[Back to top](#content)

#### Examples

Head over to the <a href="http://srph.github.io/angular-infinite-scroll/">examples page</a> to help you get started!

[Back to top](#content)

## API

The API is fairly simple.

[Back to top](#content)

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

[Back to top](#content)

### Support

For whatever purposes, please feel free to drop an issue :)

[Back to top](#content)

## Contribution

All contributions are appreciated. Please simply file an issue first for any inquiry, proposal, or question to avoid closed pull-requests; useless work. Thanks!

```
=========      ================
| issue |  ->  | pull-request |
=========      ================
```

Pull-requests with test or without are both appreciated!

[Back to top](#content)

### Building

If you plan to contribute (put some fixes, add a feature, put some tests), then this is for you. Otherwise, I wouldn't recommend building the library from source (and probably won't make sense).

**Requirements**

1. ```nodejs```
2. ```npm```
3. ```bower```

If you are using a Debian-based Linux distro, you may install ```nodejs``` and ```npm``` by:

```bash
# nodejs-legacy since it properly registers to PATH
$ apt-get install nodejs-legacy npm
```

If you have restriction / access issues, simply add ```sudo``` (```sudo apt-get install ...```).

And then install ```bower``` and ```karma-cli``` which depends on nodejs and is registered through ```npm```.

```
$ npm install bower karma-cli  -g
```

Now, we'll start building the project itself.

Start by cloning this repository. Then run these commands to install the project's dependencies:

```bash
$ cd </path/to/project-root> # replace with the root dir of the project
$ npm install & bower install
```

Uglification / Testing:

```
$ npm run test # Run the tests
$ npm run build # Build / annotate (ng-annotate)
$ npm run uglify # Uglify
$ npm run start # (build and annotate)
```

If you would like to watch the files for the tests, install ```karma-cli``` (allows you to use ```karma``` on the cli).

```bash
$ npm install karma-cli 

# on root dir
$ karma start
```

[Back to top](#content)

### Coding Style

This was copy-pasted from [```ReactJS```'s contribution style guide](https://github.com/facebook/react/blob/master/CONTRIBUTING.md)

1. Use semicolons;
2. Commas last,
3. 2 spaces for indentation (no tabs)
4. Prefer ```'``` over ```"```
5. ```"use strict";```
6. 80 character line length
8. "Attractive"
9. Keep it simple, stupid

[Back to top](#content)

## Changelogs

- Fixed callback from being executed when ```disabled``` was defined and is true, and promise is null.

#### v0.1.4

- Fixed conditions on cancelling the callback from being called (technically fixes horizontal scrolling from triggering the callback).

#### v0.1.3

- Fixed a variable being undefined.

#### v0.1.2

- Fixed *horizontal scrolling* from triggering the callback. Now, only vertical scrolling will trigger the infinite scrolling.

#### v0.1.1

- Fixed failing promises. Promise block now uses the ```final``` block instead of ```then``` so there are no unexpected behaviors when returned *promises* from asynchronous callbacks fail.

#### v0.1.0

- Released on Bower.
- Basic implementation.

## Acknowledgement

Primarily motivated and almost based on [sroze/ngInfiniteScroll](https://github.com/sroze/ngInfiniteScroll).

**angular-infinite-scroll** © 2014+, Kier Borromeo (srph). Released under the [MIT](http://mit-license.org/) License.<br>

> [srph.github.io](http://srph.github.io) &nbsp;&middot;&nbsp;
> GitHub [@srph](https://github.com/srph) &nbsp;&middot;&nbsp;
> Twitter [@_srph](https://twitter.com/_srph)
