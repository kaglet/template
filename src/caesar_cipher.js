function shiftByCase(asciiVal, shift, lb, ub) {
    let newShiftedResult = asciiVal + shift;
    // if it shifts + 1 from "z" then from lowerbound it should go to "a" not 97 + 1 which is b
    // this offset does that
    let lowerbound = lb - 1; 
    let upperbound = ub;

    if (newShiftedResult > upperbound) {
        let wrappedShift = lowerbound + newShiftedResult % upperbound; 
        newShiftedResult = wrappedShift;
    }

    let shiftedChar = String.fromCharCode(newShiftedResult);

    return shiftedChar;
}

function caesarCipher(string, shift) {
    // a = 97, z = 122, A = 65, Z = 90
    let arr = string.split('');
    let newStr = "";

    for (let i = 0; i < arr.length; i++) {
        let asciiVal = arr[i].charCodeAt(0);
        let isLetter = (asciiVal <= 122 && asciiVal >= 97) || (asciiVal <= 90 && asciiVal >= 65);
        if (isLetter) {
            let isUppercase = asciiVal <= 90 && asciiVal >= 65;
            if (isUppercase) {
                newStr += shiftByCase(asciiVal, shift, 65, 90);
            } else {
                newStr += shiftByCase(asciiVal, shift, 97, 122);
            }
        } else {
            newStr += arr[i];
        }
    }

    return newStr;
}

module.exports = caesarCipher;