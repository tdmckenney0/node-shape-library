const Shapes = require('./lib/shapes.js');

function rand() {
	return Math.floor(Math.random() * 1000) / 100;
}

for(var Shape in Shapes) {

	var scale = rand();
	var x = rand();
	var y = rand();

	console.log(' --- ' + Shape + '(' + x + ', ' + y + ') --- \n');

	Shape = new Shapes[Shape](x, y);

	console.log('  [Perimeter]: ' +  Shape.perimeter());
	console.log('  [Area]: ' +  Shape.area() + '\n');

	Shape.scale(scale);

	console.log('  [Perimeter Scale x' + scale + ']: ' + Shape.perimeter());
	console.log('  [Area Scale x' + scale + ']: ' + Shape.area() + '\n');
}