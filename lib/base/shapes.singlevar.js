/**
 * SingleVar
 * 
 * @author Tanner Mckenney
 * 
 * @param {float} l - The single variable to store.
 * 
 * @throws {object} - { String status, String message } 
 */
const SingleVar = function(l) {
	if (!isNaN(Number(l))) {
		this.sidel = Math.abs(l); 
	} else {
		throw { status: 'error', message: 'Bad arguments. Please see documentation.' };
	}
};

/**
 * SingleVar.scale(s)
 * 
 * @param {float} s - The scale factor to scale the shape by. 
 * 
 * @returns {boolean} - True on success, False on failure. 
 */
SingleVar.prototype.scale = function(s) {
	if (!isNaN(Number(s))) {
		this.sidel = (this.sidel * s);
		return true;
	} else {
		return false;
	}
};

/**
 * module.exports
 */
module.exports = SingleVar;