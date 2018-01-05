var Shapes = require('./lib/shapes.js');

var cir = new Shapes.Circle(1);

console.log(cir.radius);
console.log(cir.area());
console.log(cir.circumference());

cir.scale(2);

console.log(cir.radius);
console.log(cir.area());
console.log(cir.circumference());


try {
	var cir2 = new Shapes.Circle(null);

	console.log(cir2);
} catch (e) {
	console.log(e.message);
}

