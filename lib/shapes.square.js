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
		throw { status: 'error', message: 'Bad arguments. Please see documentation.' };
	}
};

/**
 * Square.scale(s)
 * 
 * @param {float} s - The scale factor to scale the shape by. 
 * 
 * @returns {boolean} - True on success, False on failure. 
 */
Square.prototype.scale = function(s) {
	if (!isNaN(Number(s))) {
		this.sidel = (this.sidel * s);
		return true;
	} else {
		return false;
	}
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