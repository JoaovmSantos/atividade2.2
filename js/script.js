// Contador de Palavras
function countWordOccurrences() {
    const inputElement = document.getElementById("string-contador");
    const resultElement = document.getElementById("resultado-contador");

    const str = inputElement.value;

    if (!str) {
        resultElement.textContent = "Insira uma frase para contar as palavras.";
        return;
    }

    const cleanedStr = str.replace(/[.,\/#!$%^&*;:{}=\-_`~()]/g, '').toLowerCase();
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
    const formattedResult = result.map(item => `${item[0]}: ${item[1]}`).join(', ');

    resultElement.textContent = formattedResult;
}


// Inverter Capitalização
function invertCapitalization() {
    const inputElement = document.getElementById("string-inverter");
    const resultElement = document.getElementById("resultado-inverter");

    const str = inputElement.value;

    if (!str) {
        resultElement.textContent = "Insira uma frase para inverter a capitalização.";
        return;
    }

    let invertedString = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            invertedString += char.toLowerCase();
        } else {
            invertedString += char.toUpperCase();
        }
    }

    resultElement.textContent = invertedString;
}

// Gerar Acrônimo
function generateAcronym() {
    const inputElement = document.getElementById("string-gerar");
    const resultElement = document.getElementById("resultado-gerar");

    const str = inputElement.value;

    if (!str) {
        resultElement.textContent = "Insira uma frase para gerar um acrônimo.";
        return;
    }

    const words = str.split(' ');
    const acronym = words.map(word => word.charAt(0).toUpperCase()).join('');
    resultElement.textContent = acronym;
}

// Verificar Anagrama
function areAnagrams() {
    const inputElement1 = document.getElementById("string-verificar1");
    const inputElement2 = document.getElementById("string-verificar2");
    const resultElement = document.getElementById("resultado-verificar");

    const str1 = inputElement1.value;
    const str2 = inputElement2.value;

    if (!str1 || !str2) {
        resultElement.textContent = "Insira duas frases para verificar se são anagramas.";
        return;
    }

    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    if (sortedStr1 === sortedStr2) {
        resultElement.textContent = "As frases são anagramas.";
    } else {
        resultElement.textContent = "As frases não são anagramas.";
    }
}
