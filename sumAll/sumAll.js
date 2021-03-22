const sumAll = function sumAll(int1, int2) {
    //unmutable arrguments for a test
    const Int1ForTest = arguments[0];
    const Int2ForTest = arguments[1];
    //check if first argument is bigger than second, and swap them
    if (int1 > int2) {
        [int1, int2] = [int2, int1]
    }
    let sum = 0;
    while (int1 <= int2) {
        sum = sum + int1;
        int1 = int1 + 1;        
    } 
    //check if int1 and int2 are numbers
    return (((typeof Int1ForTest === "number") && (typeof Int2ForTest === "number") && (Int1ForTest > 0) && (Int2ForTest > 0)) ? sum : "ERROR");
}

module.exports = sumAll
