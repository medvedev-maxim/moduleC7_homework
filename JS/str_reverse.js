// let strIn = prompt('Введите слово');
let strIn = 'test';

function strReverse(str) {
  if (typeof str == 'string'){
    let newStr = '';
    for (let i = str.length ; i >= 1; i--){
      newStr += str[i-1];
    }  
    return `Перевернутая строка: ${newStr}`;
  } else{
    return `Это не строка!`;
  }
}

module.exports = strReverse;

console.log(strReverse(strIn));