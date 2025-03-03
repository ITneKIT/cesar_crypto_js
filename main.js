// Алгоритм шифрования 

var N = undefined; // Мощность русского алфавита
var k = 3; // Ключ(значение свдига)
var RusAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'

// Функция кодирования
function SomethingFunc(sentence , flagAlphabet) {
    let newsentence = sentence.split('');
    if (flagAlphabet == 0) {
        N = 33 - 1 
    }else {
        N = 26 - 1
    }

    for(let i = 0; i < sentence.length; i++) {
        if (sentence[i] != " ") {
            let oldInd = RusAlphabet.indexOf(sentence[i])
            let newInd = (oldInd + k) % N
            let val = RusAlphabet[newInd]
            newsentence[i] = val
        }
    }
    return newsentence.join("");
}



console.log(SomethingFunc("хел", 0));



