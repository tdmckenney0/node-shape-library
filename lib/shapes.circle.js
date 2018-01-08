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
	if (!isNaN(Number(r))) {
		this.radius = Math.abs(r); 
	} else {
		throw { status: 'error', message: 'Bad arguments. Please see documentation.' };
	}
};

/**
 * Circle.scale(s)
 * 
 * @param {float} s - The scale factor to scale the shape by. 
 * 
 * @returns {boolean} - True on success, False on failure. 
 */
Circle.prototype.scale = function(s) {
	if (!isNaN(Number(s))) {
		this.radius = (this.radius * s);
		return true;
	} else {
		return false;
	}
};

/**
 * Circle.area()
 * 
 * @return {float} - The area of the circle. 
 */
Circle.prototype.area = function() {
	return (this.radius * this.radius * Math.PI);
}

/**
 * Circle.circumference()
 * 
 * @alias Circle.perimeter()
 * 
 * @return {float} - The circumference of the circle. 
 */
Circle.prototype.perimeter = Circle.prototype.circumference = function() {
	return (2 * Math.PI * this.radius);
}

/**
 * module.exports
 */
module.exports = Circle;