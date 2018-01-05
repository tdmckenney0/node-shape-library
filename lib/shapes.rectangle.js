/**
 * Square
 * 
 * @param {float} w - The width of the Rectangle to create.
 * @param {float} h - The height of the Rectangle to create.
 * 
 * @throws {object} - { String status, String message } 
 */
const Rectangle = function(w, h) {
	if (!isNaN(Number(w)) && !isNaN(Number(h))) {
		this.width = Math.abs(w);
		this.height = Math.abs(h);
	} else {
		throw { status: 'error', message: 'Incorrect use of `new Rectangle(w, h)`' };
	}
};

/**
 * Rectangle.scale(s)
 * 
 * @param {float} s - The scale factor to scale the shape by. 
 * 
 * @returns {boolean} - True on success, False on failure. 
 */
Rectangle.prototype.scale = function(s) {
	if (!isNaN(Number(s))) {
		this.width = (this.width * s);
		this.height = (this.height * s);
		return true;
	} else {
		return false;
	}
};

/**
 * Rectangle.area()
 * 
 * @return {float} - The area of the Rectangle. 
 */
Rectangle.prototype.area = function() {
	return (this.width * this.height);
}

/**
 * Rectangle.perimeter()
 * 
 * @return {float} - The perimeter of the Rectangle. 
 */
Rectangle.prototype.perimeter = function() {
	return (2 * (this.width + this.height));
}

/**
 * module.exports
 */
module.exports = Rectangle;