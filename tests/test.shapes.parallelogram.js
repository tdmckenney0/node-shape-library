const test = require('unit.js');
const Parallelogram = require('../lib/shapes.parallelogram.js');

describe('Parallelogram', function() {
	it('Can instantiate Parallelogram.', function() { 

		var parallelogram; 

		try {
			parallelogram = new Parallelogram(2.0, 4.0);
		} catch (e) { 
			// Do nothing.
		}
		
		test.object(parallelogram)
			.value(parallelogram.x).is(2.0)
			.value(parallelogram.y).is(4.0);
	});

	it('Incorrect type throws exception.', function() { 

		var parallelogram; 

		try {
			parallelogram = new Parallelogram('This is a string');
		} catch (e) { 
			parallelogram = e;
		}
		
		test.object(parallelogram).is({ status: 'error', message: 'Bad arguments. Please see documentation.' });
	});

	it('Can get area of Parallelogram.', function() {

		const parallelogram = new Parallelogram(14.0, 35.0);
		const area = parallelogram.area();

		test.number(area).is(490.0);
	});

	it('Can get perimeter of a Parallelogram.', function() {

		const parallelogram = new Parallelogram(22, 36.0);
		const perimeter = parallelogram.perimeter();

		test.number(perimeter).is(116.0);
	});

	it('Can scale a Parallelogram.', function() {

		const parallelogram = new Parallelogram(12, 7.0);

		parallelogram.scale(1.5);

		const area = parallelogram.area();
		const perimeter = parallelogram.perimeter();

		test.number(parallelogram.x).is(18.0)
			.number(parallelogram.y).is(10.5)
			.number(area).is(189.0)
			.number(perimeter).is(57.0);
	});

	it('scale() can return false on bad type.', function() { 

		const parallelogram = new Parallelogram(1, 1);
		const scale_op_result = parallelogram.scale("This is not the right type");

		test.bool(scale_op_result).isFalse();
	});
});