# Boilerplate React App

__React + Redux__ boilerplate for creating Single Page Application.

If you want to include foundation framework, check out this [branch](https://github.com/xJkit/react-boilerplate/tree/feat/foundation) instead.

### Installation

```sh
$ npm install
```

You need to know that I choose the React version up to v15 because of the __enzyme__ library. Though __enzyme__ is suitable for v0.13, v0.14 and v15; however, the configurations for v15 is the easiest way to kick off.

### Environment
``Development & Hot Reload`` via __webpack.config.js__ and __server.js__:

```sh
$ npm run start
```

``Production & Build`` via __webpack.config.prod.js__:

```sh
$ npm run build
```
Webpack will create all essential assets including ``bundle.js`` into the ``dist/`` directory.


### TDD/BDD development
You could run __Karma__ test runner for watching your files by

```
$ npm test
```

#### Unit Testing
1. [Karma](https://github.com/karma-runner/karma): A simple tool that allows you to execute JavaScript code in multiple real browsers.
> The main purpose of Karma is to make your test-driven development easy, fast, and fun.
2. [Mocha](https://github.com/mochajs/mocha): Mocha is a simple, flexible, fun JavaScript test framework for node.js and the browser.
> For more information view the [documentation](http://mochajs.org/)
3. [expect](https://github.com/mjackson/expect): Write better assertions
> a more compact alternative to [Chai](http://chaijs.com/) and [Sinon](http://sinonjs.org/)
4. [Enzyme](https://github.com/airbnb/enzyme): JavaScript Testing utilities for React
> Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.


If you don't want to be in watch mode, just modify the __singleRun__ from _false_ to _true_ in the __Karma.conf.js__ file.

----

If you have questions or suggestions, please feel free to contact me via email: ``xjkit54780@gmail.com``.

### License
MIT [@JayChung](https://github.com/xJkit)
