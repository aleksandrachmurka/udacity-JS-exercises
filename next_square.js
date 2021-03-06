// Find next square

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square, then -1 should be returned. You may assume the parameter is positive.

// Examples:

// findNextSquare(4) --> returns 9
// findNextSquare(121) --> returns 144
// findNextSquare(114) --> returns -1 since 114 is not a square

function findNextSquare(num) {
	let sqr= Math.sqrt(num);
	if (Number.isInteger(sqr)) {
		sqr = sqr + 1;
		let pow = Math.pow(sqr, 2);
		return pow;
	} else {
		return -1;}
}
}
