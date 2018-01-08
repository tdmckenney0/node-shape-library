const test = require('unit.js');
const Circle = require('../lib/shapes.circle.js');

describe('Circle', function() {
	it('Can instantiate Circle.', function() { 

		var cir; 

		try {
			cir = new Circle(2.0);
		} catch (e) { 
			// Do nothing.
		}
		
		test.object(cir).value(cir.x).is(2.0);
	});

	it('Incorrect type throws exception.', function() { 

		var cir; 

		try {
			cir = new Circle('This is a string');
		} catch (e) { 
			cir = e;
		}
		
		test.object(cir).is({ status: 'error', message: 'Bad arguments. Please see documentation.' });
	});

	it('Can get area of Circle.', function() {

		const cir = new Circle(2.0);
		const area = cir.area();

		test.number(area).is(2.0 * 2.0 * Math.PI);
	});

	it('Can get circumference of Circle.', function() {

		const cir = new Circle(2.0);
		const circumference = cir.circumference();

		test.number(circumference).is(2.0 * 2 * Math.PI);
	});

	it('Can scale a Circle.', function() {

		const cir = new Circle(2.0);

		cir.scale(1.5);

		const area = cir.area();
		const circumference = cir.circumference();

		test.number(cir.x).is(3)
			.number(area).is(3 * 3 * Math.PI)
			.number(circumference).is(3 * 2 * Math.PI);
	});

	it('scale() can return false on bad type.', function() { 

		const cir = new Circle(1, 1);
		const scale_op_result = cir.scale("This is not the right type");

		test.bool(scale_op_result).isFalse();
	});
});