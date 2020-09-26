function add(n1: number, n2: number, printResult: boolean, resultPhrase: string) {
    let result = n1 + n2;
    if (printResult) {
        console.log( resultPhrase + result);
    } else {
        return n1 + n2;
    }

}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);
