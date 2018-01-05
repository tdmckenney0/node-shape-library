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

		var square; 

		try {
			square = new Shapes.Square('This is a string');
		} catch (e) { 
			square = e;
		}
		
		test.object(square).is({ status: 'error', message: 'Incorrect use of `new Square(x)`' });
	});

	it('Can get area of Square.', function() {

		const square = new Shapes.Square(2.0);
		const area = square.area();

		test.number(area).is(4.0);
	});

	it('Can get perimeter of a Square.', function() {

		const square = new Shapes.Square(2.0);
		const perimeter = square.perimeter();

		test.number(perimeter).is(8.0);
	});

	it('Can scale a Square.', function() {

		const square = new Shapes.Square(2.0);

		square.scale(1.5);

		const area = square.area();
		const perimeter = square.perimeter();

		test.number(square.sidel).is(3)
			.number(area).is(9.0)
			.number(perimeter).is(12.0);
	});
});