# Building

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
