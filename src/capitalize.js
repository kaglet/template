
function capitalize(string) {
    let char = string.charAt(0);
    let upper = char.toUpperCase();
    let newWord = upper + string.substring(1);
    return newWord;
}

module.exports = capitalize;