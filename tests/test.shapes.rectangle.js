const test = require('unit.js');
const Rectangle = require('../lib/shapes.rectangle.js');

describe('Rectangle', function() {
	it('Can instantiate Rectangle.', function() { 

		var rectangle; 

		try {
			rectangle = new Rectangle(2.0, 4.0);
		} catch (e) { 
			// Do nothing.
		}
		
		test.object(rectangle)
			.value(rectangle.x).is(2.0)
			.value(rectangle.y).is(4.0);
	});

	it('Incorrect type throws exception.', function() { 

		var rectangle; 

		try {
			rectangle = new Rectangle('This is a string');
		} catch (e) { 
			rectangle = e;
		}
		
		test.object(rectangle).is({ status: 'error', message: 'Bad arguments. Please see documentation.' });
	});

	it('Can get area of Rectangle.', function() {

		const rectangle = new Rectangle(14.0, 35.0);
		const area = rectangle.area();

		test.number(area).is(490.0);
	});

	it('Can get perimeter of a Rectangle.', function() {

		const rectangle = new Rectangle(22, 36.0);
		const perimeter = rectangle.perimeter();

		test.number(perimeter).is(116.0);
	});

	it('Can scale a Rectangle.', function() {

		const rectangle = new Rectangle(12, 7.0);

		rectangle.scale(1.5);

		const area = rectangle.area();
		const perimeter = rectangle.perimeter();

		test.number(rectangle.x).is(18.0)
			.number(rectangle.y).is(10.5)
			.number(area).is(189.0)
			.number(perimeter).is(57.0);
	});

	it('scale() can return false on bad type.', function() { 

		const rectangle = new Rectangle(1, 1);
		const scale_op_result = rectangle.scale("This is not the right type");

		test.bool(scale_op_result).isFalse();
	});
});