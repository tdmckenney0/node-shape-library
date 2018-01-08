const test = require('unit.js');
const Square = require('../lib/shapes.square.js');

describe('Square', function() {
	it('Can instantiate Square.', function() { 

		var square; 

		try {
			square = new Square(2.0);
		} catch (e) { 
			// Do nothing.
		}
		
		test.object(square).value(square.sidel).is(2.0);
	});

	it('Incorrect type throws exception.', function() { 

		var square; 

		try {
			square = new Square('This is a string');
		} catch (e) { 
			square = e;
		}
		
		test.object(square).is({ status: 'error', message: 'Bad arguments. Please see documentation.' });
	});

	it('Can get area of Square.', function() {

		const square = new Square(2.0);
		const area = square.area();

		test.number(area).is(4.0);
	});

	it('Can get perimeter of a Square.', function() {

		const square = new Square(2.0);
		const perimeter = square.perimeter();

		test.number(perimeter).is(8.0);
	});

	it('Can scale a Square.', function() {

		const square = new Square(2.0);

		square.scale(1.5);

		const area = square.area();
		const perimeter = square.perimeter();

		test.number(square.sidel).is(3)
			.number(area).is(9.0)
			.number(perimeter).is(12.0);
	});

	it('scale() can return false on bad type.', function() { 

		const square = new Square(1, 1);
		const scale_op_result = square.scale("This is not the right type");

		test.bool(scale_op_result).isFalse();
	});
});