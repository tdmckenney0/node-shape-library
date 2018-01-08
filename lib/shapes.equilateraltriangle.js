const SingleVar = require('../lib/base/shapes.singlevar.js');
/**
 * EquilateralTriangle
 * 
 * @param {float} l - The side length of the EquilateralTriangle to create.
 * 
 * @throws {object} - { String status, String message } 
 */
const EquilateralTriangle = SingleVar;

/**
 * EquilateralTriangle.area()
 * 
 * @return {float} - The area of the EquilateralTriangle. 
 */
EquilateralTriangle.prototype.area = function() {
	return (Math.sqrt(3) * (this.sidel * this.sidel)) / 4;
}

/**
 * EquilateralTriangle.perimeter()
 * 
 * @return {float} - The perimeter of the EquilateralTriangle. 
 */
EquilateralTriangle.prototype.perimeter = function() {
	return (3 * this.sidel);
}

/**
 * module.exports
 */
module.exports = EquilateralTriangle;