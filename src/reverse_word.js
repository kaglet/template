function reverseWord(string) {
    let newString = "";
    for (let i = string.length - 1; i < string; i--) {
        newString += string[i];
    }
}

module.exports = reverseWord;