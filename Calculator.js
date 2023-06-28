class Calculator {
    constructor() {
        this.inputHistory = []; // history of inputs
        this.operators = []; // queue of operators
        this.runningNumbers = [] // queue of current numbers in state
        this.currentNumberState = 0; //current state
    }

    getInputHistory() {
        return this.inputHistory;
    }
    getCurrentState() {
        return this.currentNumberState;
    }

    getOperators() {
        return this.operators;
    }

    pushOperator(operator) {
        this.operators.push(operator)
    }

    getCurrentState() {
        return this.currentNumberState;
    }

    checkIsDigit(char){
        return !isNaN(parseInt(char));
    }

    pushNumber(number) {
        this.runningNumbers.push(number)
    }


    setInputHistory(input) {
        this.inputHistory = [...this.inputHistory, ...input]
    }

    processInputArray() {
        let newNumber = ""
        this.runningNumbers = [];
        for(let char of this.getInputHistory()) {
            if (this.checkIsDigit(char)) {
                newNumber += char
            }
            else if (char == '+' || char == '-' || char == '*' || char == '/') {
                this.pushOperator(char);
            } 
            if(!this.checkIsDigit(char) && newNumber != "") {
                this.pushNumber(parseInt(newNumber));
                newNumber = "";
            }

            if(char == 'c') {
                this.inputHistory = [];
                console.log(0);
                this.currentNumberState = 0;
                this.runningNumbers = [];
            }

            if(char == '=') {
                this.calculateState();
                this.inputHistory = [this.currentNumberState];
            }        
        }
    }

    

    calculateEquation(num1, num2, operator) {
        switch(operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
        }
    }

    calculateState() {
        if(this.runningNumbers.length == 0) {
            this.runningNumbers.push(this.getCurrentState())
        } 
            while(this.operators.length >= 1) {
                while(this.runningNumbers.length > 1) {
                    let operator = this.operators.shift();
                    let num1 = this.runningNumbers.shift();
                    let num2 = this.runningNumbers.shift();
                    let result = this.calculateEquation(num1, num2, operator);
                    this.currentNumberState = result;
                    this.runningNumbers.unshift(result);
                }
            }
            console.log(this.currentNumberState)
            
    
    }
}

export default Calculator;