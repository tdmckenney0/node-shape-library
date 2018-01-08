const SingleVar = require('../lib/base/shapes.singlevar.js');
/**
 * Square
 * 
 * @author Tanner Mckenney
 * 
 * @param {float} l - The side length of the Square to create.
 * 
 * @throws {object} - { String status, String message } 
 */
const Square = function(l) {
	SingleVar.call(this, l);
};

Object.assign(Square.prototype, SingleVar.prototype); // Extend

/**
 * Square.area()
 * 
 * @return {float} - The area of the Square. 
 */
Square.prototype.area = function() {
	return (this.sidel * this.sidel);
}

/**
 * Square.perimeter()
 * 
 * @return {float} - The perimeter of the Square. 
 */
Square.prototype.perimeter = function() {
	return (4 * this.sidel);
}

/**
 * module.exports
 */
module.exports = Square;