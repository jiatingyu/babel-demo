"use strict";

require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js");
require("regenerator-runtime/runtime");
var _foo = require("./foo");
console.log((0, _foo.hello)("foo"));
new Promise(function (resolve, reject) {
  resolve('success');
});