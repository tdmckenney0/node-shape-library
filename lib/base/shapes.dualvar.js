/**
 * DualVar
 * 
 * @author Tanner Mckenney
 * 
 * @param {float} x - The first variable of to store.
 * @param {float} y - The second variable of to store.
 * 
 * @throws {object} - { String status, String message } 
 */
const DualVar = function(x, y) {
	if (!isNaN(Number(x)) && !isNaN(Number(y))) {
		this.x = Math.abs(x);
		this.y = Math.abs(y);
	} else {
		throw { status: 'error', message: 'Bad arguments. Please see documentation.' };
	}
};

/**
 * DualVar.scale(s)
 * 
 * @param {float} s - The scale factor to scale the shape by. 
 * 
 * @returns {boolean} - True on success, False on failure. 
 */
DualVar.prototype.scale = function(s) {
	if (!isNaN(Number(s))) {
		this.x = (this.x * s);
		this.y = (this.y * s);
		return true;
	} else {
		return false;
	}
};

/**
 * module.exports
 */
module.exports = DualVar;