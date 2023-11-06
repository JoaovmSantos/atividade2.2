function invertCapitalization(str) {
    let invertedString = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            invertedString += char.toLowerCase();
        } else {
            invertedString += char.toUpperCase();
        }
    }
    return invertedString;
}

