const SingleVar = require('../lib/base/shapes.singlevar.js');
/**
 * Circle
 * 
 * @author Tanner Mckenney
 * 
 * @param {float} r - The radius of the circle to create.
 * 
 * @throws {object} - { String status, String message } 
 */
const Circle = function(r) {
	SingleVar.call(this, r);
};

Object.assign(Circle.prototype, SingleVar.prototype); // Extend

/**
 * Circle.area()
 * 
 * @return {float} - The area of the circle. 
 */
Circle.prototype.area = function() {
	return (this.x * this.x * Math.PI);
}

/**
 * Circle.circumference()
 * 
 * @alias Circle.perimeter()
 * 
 * @return {float} - The circumference of the circle. 
 */
Circle.prototype.perimeter = Circle.prototype.circumference = function() {
	return (2 * Math.PI * this.x);
}

/**
 * module.exports
 */
module.exports = Circle;