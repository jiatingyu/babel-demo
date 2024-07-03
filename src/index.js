import 'core-js';
import 'regenerator-runtime/runtime';
import { hello } from "./foo";

console.log(hello("foo"));

new Promise((resolve,reject)=>{
    resolve('success')
})
