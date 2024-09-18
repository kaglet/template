// TODO: modulus from character position should reset so 26 + 1 = 0. 

function caesarCipher(string, shift) {
    // a = 97, z = 122, A = 65, Z = 90
    console.log("a".charCodeAt(0), "z".charCodeAt(0), "A".charCodeAt(0), "Z".charCodeAt(0));
    let arr = string.split('');
    let newStr = "";
    for (let i = 0; i < arr.length; i++) {
        let asciiVal = arr[i].charCodeAt(i);
        let isLetter = (asciiVal <= 122 && asciiVal >= 97) || (asciiVal <= 90 && asciiVal >= 65);
        if (isLetter) {
            let isUppercase = asciiVal <= 90 && asciiVal >= 65;
            if (isUppercase) {
                newStr += String.fromCharCode(asciiVal + shift);
            } else {
                newStr += String.fromCharCode(asciiVal + shift);
            }
        } else {
            newStr += arr[i];
        }
    }

    return newStr;
}

module.exports = caesarCipher;