// Write a function that takes a number as an argument and returns a string represents random characters present in a given string, number of characters of string returned should be the same with the number value of the argument.

// characters are just letters, spaces should not be considered.

// The given string

// "Hi all udacity students"

// Examples

// numChars(5); // uyhsa
// numChars(5); // hadln
// numchars(7);  // sdlituh

// With every call of of the function, it returns different results(random characters)


var str = "Hi all udacity students";
var num = 7;

function randomize(num, str) {
	var output = "";
	str = str.toLowerCase().replace(/\s/g,'').split("");
	for (var i=0; i < num; i++) {
		output += str[Math.floor(Math.random() * num+1)];
	}
	return output;
}

