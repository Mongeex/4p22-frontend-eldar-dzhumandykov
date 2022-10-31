'use strict'

const button = document.getElementById('button');
const resultForm = document.getElementById('resultForm')

function calculate() {
const num1 = document.getElementById('num1').value;
const num2 = document.getElementById('num2').value;
const operation = document.getElementById('operation').value;
let result

if (num1 === '') {
    resultForm.innerText = 'Первое число не указано';
    return console.log('Первое число не указано');
}

if (num2 === '') {
    resultForm.innerText = 'Второе число не указано';
    return console.log('Второе число не указано');
}

if (operation === '') {
    resultForm.innerText = 'Не введен знак';
    return console.log('Не введен знак');
}

if (isNaN(num1) === true || isNaN(num2) === true) {
    resultForm.innerText = 'Некорректный ввод чисел';
    return console.log('Некорректный ввод чисел');
}

switch (operation) {
    case '':
        return console.log('Не введен знак');
        break;
    case '+':
        result = Number(num1) + Number(num2);
        break; 
    case '-':
        result = Number(num1) - Number(num2);
        break; 
    case '*':
        result = Number(num1) * Number(num2);
        break; 
    case '/':
        result = Number(num1) / Number(num2);
        break;  
    default:
        return resultForm.innerText = 'Программа не поддерживает такую операцию';
        console.log('Программа не поддерживает такую операцию');
        break;                                       
}

if (num2 === '0' && operation === '/') {
    resultForm.innerText = 'Операция некорректна';
    console.log('Операция некорректна');
}

else {
    resultForm.innerText = result;
    console.log(result);
}

}