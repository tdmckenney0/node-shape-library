/**
 * Square
 * 
 * @param {float} l - The side length of the Square to create.
 * 
 * @throws {object} - { String status, String message } 
 */
const Square = function(l) {
	if (!isNaN(Number(l))) {
		this.sidel = Math.abs(l); 
	} else {
		throw { status: 'error', message: 'Incorrect use of `new Square(x)`' };
	}
};

/**
 * Square.scale(s)
 * 
 * @param {float} s - The scale factor to scale the shape by. 
 */
Square.prototype.scale = function(s) {
	this.sidel = (this.sidel * s);
};

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