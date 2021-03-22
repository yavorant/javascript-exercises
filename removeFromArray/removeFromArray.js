const removeFromArray = function(...args) { //...args means all arguments
 	let ArrayFromArgs = args; //takes array from arguments
    firstArray = ArrayFromArgs.shift(); //takes away first element(arguments[0]) of ArrayFromArgs
    const newFirstArray = [];
    // looping throu firstArray, our first argument(arguments[0]) the array that we'll change
    //if arguments === firstArray[i] don't push them to a new array
    for (let i = 0; i < firstArray.length; i++) {
        if (arguments[1] !== firstArray[i] && arguments[2] !== firstArray[i] && arguments[3] !== firstArray[i] && arguments[4] !== firstArray[i] && arguments[5] !== firstArray[i]) {
            newFirstArray.push(firstArray[i]); //new Array without elements that we met already in arguments       
        }
    }    
return newFirstArray; 
}

module.exports = removeFromArray

