# Changelogs

#### v0.1.5

- Fixed callback from being executed when ```disabled``` was `defined` and `true`, and `promise` is `null`.

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
