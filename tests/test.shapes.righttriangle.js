const test = require('unit.js');
const RightTriangle = require('../lib/shapes.righttriangle.js');

describe('RightTriangle', function() {
	it('Can instantiate RightTriangle.', function() { 

		var righttriangle; 

		try {
			righttriangle = new RightTriangle(2.0, 4.0);
		} catch (e) { 
			// Do nothing.
		}
		
		test.object(righttriangle)
			.value(righttriangle.x).is(2.0)
			.value(righttriangle.y).is(4.0);
	});

	it('Incorrect type throws exception.', function() { 

		var righttriangle; 

		try {
			righttriangle = new RightTriangle('This is a string');
		} catch (e) { 
			righttriangle = e;
		}
		
		test.object(righttriangle).is({ status: 'error', message: 'Bad arguments. Please see documentation.' });
	});

	it('Can get area of RightTriangle.', function() {

		const righttriangle = new RightTriangle(14.0, 35.0);
		const area = righttriangle.area();

		test.number(area).is(245.0);
	});

	it('Can get perimeter of a RightTriangle.', function() {

		const righttriangle = new RightTriangle(22, 36.0);
		const perimeter = righttriangle.perimeter();

		test.number(perimeter).is(Math.sqrt((22 * 22) + (36.0 * 36.0)) + 22 + 36.0);
	});

	it('Can scale a RightTriangle.', function() {

		const righttriangle = new RightTriangle(12, 7.0);

		righttriangle.scale(1.5);

		const area = righttriangle.area();
		const perimeter = righttriangle.perimeter();

		test.number(righttriangle.x).is(18.0)
			.number(righttriangle.y).is(10.5)
			.number(area).is(94.5)
			.number(perimeter).is(Math.sqrt((18.0 * 18.0) + (10.5 * 10.5)) + 18.0 + 10.5);
	});

	it('scale() can return false on bad type.', function() { 

		const righttriangle = new RightTriangle(1, 1);
		const scale_op_result = righttriangle.scale("This is not the right type");

		test.bool(scale_op_result).isFalse();
	});
});