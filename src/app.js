// var export require('module.export')
var http  = require('http')

console.log("hello world!");

function add(a, b) {
    return a+b;
}
console.log(add(3,3))

exports.add = add;
