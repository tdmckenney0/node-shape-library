const DualVar = require('../lib/base/shapes.dualvar.js');
/**
 * RightTriangle
 * 
 * @param {float} b - The base of the RightTriangle to create.
 * @param {float} h - The height of the RightTriangle to create.
 * 
 * @throws {object} - { String status, String message } 
 */
const RightTriangle = function(b, h) {
	DualVar.call(this, b, h);
};

Object.assign(RightTriangle.prototype, DualVar.prototype); // Extend

/**
 * RightTriangle.area()
 * 
 * @return {float} - The area of the RightTriangle. 
 */
RightTriangle.prototype.area = function() {
	return ((this.x * this.y) / 2);
}

/**
 * RightTriangle.perimeter()
 * 
 * @return {float} - The perimeter of the RightTriangle. 
 */
RightTriangle.prototype.perimeter = function() {
	return Math.sqrt((this.x * this.x) + (this.y * this.y)) + this.x + this.y;
}

/**
 * module.exports
 */
module.exports = RightTriangle;