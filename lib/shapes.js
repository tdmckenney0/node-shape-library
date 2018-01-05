/**
 * Circle
 * 
 * @param {float} r - The radius of the circle to create.
 * 
 * @throws {object} - { String status, String message } 
 */
const Circle = function(r) {
	if (!isNaN(Number(r))) {
		this.radius = Math.abs(r); 
	} else {
		throw { status: 'error', message: 'Incorrect use of `new Circle(x)`' };
	}
};

/**
 * Circle.scale(s)
 * 
 * @param {float} s - The scale factor to scale the shape by. 
 */
Circle.prototype.scale = function(s) {
	this.radius = (this.radius * s);
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
 * @return {float} - The circumference of the circle. 
 */
Circle.prototype.circumference = function() {
	return (2 * Math.PI * this.radius);
}

/**
 * module.exports
 */
module.exports = {
	Circle: Circle 
};