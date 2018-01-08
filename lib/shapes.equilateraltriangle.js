const SingleVar = require('../lib/base/shapes.singlevar.js');
/**
 * EquilateralTriangle
 * 
 * @author Tanner Mckenney
 * 
 * @param {float} l - The side length of the EquilateralTriangle to create.
 * 
 * @throws {object} - { String status, String message } 
 */
const EquilateralTriangle = function(l) {
	SingleVar.call(this, l);
};

Object.assign(EquilateralTriangle.prototype, SingleVar.prototype); // Extend

/**
 * EquilateralTriangle.area()
 * 
 * @return {float} - The area of the EquilateralTriangle. 
 */
EquilateralTriangle.prototype.area = function() {
	return (Math.sqrt(3) * (this.x * this.x)) / 4;
}

/**
 * EquilateralTriangle.perimeter()
 * 
 * @return {float} - The perimeter of the EquilateralTriangle. 
 */
EquilateralTriangle.prototype.perimeter = function() {
	return (3 * this.x);
}

/**
 * module.exports
 */
module.exports = EquilateralTriangle;