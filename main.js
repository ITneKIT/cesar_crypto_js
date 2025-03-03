// Алгоритм шифрования 

var N = undefined; // Мощность русского алфавита
var k = 3; // Ключ(значение свдига)
var RusAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
var EngAlphabet = 'abcdefghijklmnopqrstuvwxyz'

// Функция кодирования
function encrypt_cesar(alphabetName, sentence) { // alphabet = 'en' or 'rus'
    var alphabetPower
    var alphabet
    if (alphabetName === 'en') {
        alphabetPower = 26
        alphabet = EngAlphabet
    }else { // russian alphabet
        alphabetPower = 33
        alphabet = RusAlphabet
    }

    // New vars
    sentence = sentence.toLowerCase();
    let newSentence = sentence.split('');
    
    for (let i = 0; i < sentence.length; i++) {
        if (newSentence[i] === ' ') {
            continue
        }
        let NewLetterIndex = (alphabet.indexOf(newSentence[i]) - k) % alphabetPower;
        newSentence[i] = alphabet[NewLetterIndex];
    }

    return [newSentence.join(""), true]
}

function descrypt_cesar(alphabetName, sentence) {
    var alphabetPower
    var alphabet
    if (alphabetName === 'en') {
        alphabetPower = 26
        alphabet = EngAlphabet
    }else { // russian alphabet
        alphabetPower = 33
        alphabet = RusAlphabet
    }

    // New vars
    sentence = sentence.toLowerCase();
    let newSentence = sentence.split('');
    
    for (let i = 0; i < sentence.length; i++) {
        if (newSentence[i] === ' ') {
            continue
        }
        let NewLetterIndex = (alphabet.indexOf(newSentence[i]) + k) % alphabetPower;
        newSentence[i] = alphabet[NewLetterIndex];
    }

    return [newSentence.join(""), false]
}

function theCaesarСipher(alphabetName,params) {
    if (params[1] === true) {
        return descrypt_cesar(alphabetName, params[0])
    } else {
        return encrypt_cesar(alphabetName, params[0])
    }
}



// As main function here
// console.log("Enter your key for ecrypting") // ok, may be after wil do it
// Also did like here ->

// I want encrypt if sentence is usual or descrypt if sentence have ecrypted already 
startSentence = ["Hello world", false]

afterEncrypt = theCaesarСipher('en', startSentence)
console.log(afterEncrypt)
// After let's to descrypt our messege
afterDescrypt = theCaesarСipher('en', afterEncrypt)
console.log(afterDescrypt)

