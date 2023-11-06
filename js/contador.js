function countWordOccurrences(str) {
   
    const cleanedStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();
    
    
    const words = cleanedStr.split(' ');

    const wordCount = {};

    words.forEach(word => {
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    });

    
    const result = Object.entries(wordCount);

    return result;
}

