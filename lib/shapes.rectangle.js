const DualVar = require('../lib/base/shapes.dualvar.js');
/**
 * Rectangle
 * 
 * @param {float} w - The width of the Rectangle to create.
 * @param {float} h - The height of the Rectangle to create.
 * 
 * @throws {object} - { String status, String message } 
 */
const Rectangle = function(w, h) {
	DualVar.call(this, w, h);
};

Object.assign(Rectangle.prototype, DualVar.prototype); // Extend

/**
 * Rectangle.area()
 * 
 * @return {float} - The area of the Rectangle. 
 */
Rectangle.prototype.area = function() {
	return (this.x * this.y);
}

/**
 * Rectangle.perimeter()
 * 
 * @return {float} - The perimeter of the Rectangle. 
 */
Rectangle.prototype.perimeter = function() {
	return (2 * (this.x + this.y));
}

/**
 * module.exports
 */
module.exports = Rectangle;