const test = require('unit.js');
const EquilateralTriangle = require('../lib/shapes.equilateraltriangle.js');

describe('EquilateralTriangle', function() {
	it('Can instantiate EquilateralTriangle.', function() { 

		var equilateraltriangle; 

		try {
			equilateraltriangle = new EquilateralTriangle(2.0);
		} catch (e) { 
			// Do nothing.
		}
		
		test.object(equilateraltriangle).value(equilateraltriangle.sidel).is(2.0);
	});

	it('Incorrect type throws exception.', function() { 

		var equilateraltriangle; 

		try {
			equilateraltriangle = new EquilateralTriangle('This is a string');
		} catch (e) { 
			equilateraltriangle = e;
		}
		
		test.object(equilateraltriangle).is({ status: 'error', message: 'Bad arguments. Please see documentation.' });
	});

	it('Can get area of EquilateralTriangle.', function() {

		const equilateraltriangle = new EquilateralTriangle(2.0);
		const area = equilateraltriangle.area();

		test.number(area).is(Math.sqrt(3));
	});

	it('Can get perimeter of a EquilateralTriangle.', function() {

		const equilateraltriangle = new EquilateralTriangle(2.0);
		const perimeter = equilateraltriangle.perimeter();

		test.number(perimeter).is(6.0);
	});

	it('Can scale a EquilateralTriangle.', function() {

		const equilateraltriangle = new EquilateralTriangle(2.0);

		equilateraltriangle.scale(1.5);

		const area = equilateraltriangle.area();
		const perimeter = equilateraltriangle.perimeter();

		test.number(equilateraltriangle.sidel).is(3)
			.number(area).is((9.0 * Math.sqrt(3)) / 4)
			.number(perimeter).is(9.0);
	});

	it('scale() can return false on bad type.', function() { 

		const equilateraltriangle = new EquilateralTriangle(1);
		const scale_op_result = equilateraltriangle.scale("This is not the right type");

		test.bool(scale_op_result).isFalse();
	});
});