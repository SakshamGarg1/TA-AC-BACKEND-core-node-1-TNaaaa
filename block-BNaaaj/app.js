
var area = require('./area');

var circle_area = area.arcircle(10);

console.log(circle_area);

var bufer =  Buffer.alloc(12);
var bufer2 = Buffer.allocUnsafe(12);

bufer.write("Hello world!");
console.log(bufer.toString());

