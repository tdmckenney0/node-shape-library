const test = require('unit.js');
const Shapes = require('../lib/shapes.js');

describe('Square', function() {
	it('Can instantiate Square.', function() { 

		var square; 

		try {
			square = new Shapes.Square(2.0);
		} catch (e) { 
			// Do nothing.
		}
		
		test.object(square).value(square.sidel).is(2.0);
	});

	it('Incorrect type throws exception.', function() { 

		var cir; 

		try {
			cir = new Shapes.Square('This is a string');
		} catch (e) { 
			cir = e;
		}
		
		test.object(cir).is({ status: 'error', message: 'Incorrect use of `new Square(x)`' });
	});

	it('Can get area of Circle.', function() {

		const cir = new Shapes.Square(2.0);
		const area = cir.area();

		test.number(area).is(2.0 * 2.0 * Math.PI);
	});

	it('Can get circumference of Circle.', function() {

		const cir = new Shapes.Square(2.0);
		const circumference = cir.circumference();

		test.number(circumference).is(2.0 * 2 * Math.PI);
	});

	it('Can scale a Circle.', function() {

		const cir = new Shapes.Square(2.0);

		cir.scale(1.5);

		const area = cir.area();
		const circumference = cir.circumference();

		test.number(cir.radius).is(3)
			.number(area).is(3 * 3 * Math.PI)
			.number(circumference).is(3 * 2 * Math.PI);
	});
});