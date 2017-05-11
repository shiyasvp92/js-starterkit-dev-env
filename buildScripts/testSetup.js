//this file is not transpiled

//Register babel to transpile before our tests run
require('babel-register')();

//Disable webpack features that mocha doesnt understand
require.extensions['.css'] = function() {};

