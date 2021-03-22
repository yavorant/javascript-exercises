const reverseString = function(str) {
	let chars = str.split(''); //split input string in an array with chars
	let reversedArray = chars.reverse(); //revers an array of chars
	return reversedArray.join(''); //join chars together in string
}

module.exports = reverseString
