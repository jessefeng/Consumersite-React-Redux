/**
 * Created by JessJing on 2016/11/10.
 */


'use strict';

const calc = require('./calculatorModule');
const args = process.argv.slice(2);


if (args.length !== 3) {
    console.log('args Error');
    throw new Error('args Erro');
    // return false;
}

// P1 OP P2
let parameter1 = args[0];
let operator = args[1];
let parameter2 = args[2];


// let result = eval(`${parameter1} ${operator} ${parameter2}`);
// console.log(result);

let result;
switch (operator) {
    case '+':
        result = calc.add(parameter1,parameter2);
        break;
    case '-':
        result = calc.subtract(parameter1,parameter2);
        break;
    case '*':
    case 'x':
        result = calc.multi(parameter1,parameter2);
        break;
    case '/':
    case '÷':
        result = calc.divide(parameter1,parameter2);
        break;
    default:
        throw new Error('unexpected operator: ' + operator);
}
console.log(result);

