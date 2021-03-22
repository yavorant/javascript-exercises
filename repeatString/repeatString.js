const repeatString = function(inputString, numberOfTimes) {
	let n = 0;
	let resultString = '';
	while (n < numberOfTimes) {
  		n++;
  		resultString += inputString;
        }
        return (numberOfTimes >= 0 ? resultString : 'ERROR');
}

module.exports = repeatString
