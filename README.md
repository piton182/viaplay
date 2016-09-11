# viaplay
Viaplay Test Assignment

## Prerequisites
* Node.js 5+
* npm install -g mocha

## Usage
```sh
$ git clone https://github.com/piton182/viaplay.git
$ cd viaplay && npm install
$ npm test
$ npm start
```

## Reasoning
* The API is built using Express.js (and generated with ExpressGenerator)
* Some asynchronous code is done with callbacks and some with promises (using Q)
* Tests are done with [Chakram](http://dareid.github.io/chakram/) which is built on top of [Mocha.js](http://mochajs.org/)
* [Sinon.js](http://sinonjs.org/) is used for mocking/stubbing the call to Viaplay for testing purposes
* [apicache](https://www.npmjs.com/package/apicache) middleware is meant to deal with performance concerns

## TODOs (or not-covered concerns)
* Better exception handling
* No negative tests covering cases when circuits to 3rd party service's break
* Node's Cluster module would allow to tap into full power of the machine the service is running on
