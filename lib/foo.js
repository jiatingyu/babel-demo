"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hello = void 0;
var hello = exports.hello = function hello(msg) {
  return "hello ".concat(msg);
};