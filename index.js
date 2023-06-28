import Calculator from './Calculator.js';
import readline from 'readline';

var rl = readline.createInterface(process.stdin, process.stdout);

const output = async () => {
    const calculator = new Calculator();
    calculator.inputHistory = [];
    rl.on('line', (input) => {
        let arrayInput = input.split("")
        calculator.setInputHistory(arrayInput)
        calculator.processInputArray();
        calculator.operators = []
        
    if(input == '!') {
        rl.close(); 
    }
    })
    
}

output();