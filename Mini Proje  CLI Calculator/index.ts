import { question } from "readline-sync";

type Operator = '+' | '-' | '*' | '/' 

function main (): void {
    const firstStr: string = question('Enter first number:\n')
    const operator: string = question('Enter operator:\n')
    const secondStr: string = question('Enter second number:\n')

    const validInput: boolean = isNumber(firstStr) && isOperator(operator as Operator) && isNumber(secondStr)

    if(validInput){
        const firstNum: number = parseInt(firstStr)
        const secondNum: number = parseInt(secondStr)
        const result = calculate(firstNum, operator as Operator, secondNum)
        console.log(result)

    }else {
        console.log('\n Yoo that is not a valid Input bro.')
    }
}

function calculate(firstNum, operator: Operator, secondNum: number) {
    switch(operator){
        case '+':
            return firstNum + secondNum
        case '-':
            return firstNum - secondNum
        case '*':
            return firstNum * secondNum
        case '/':
            return firstNum / secondNum
    }
}

function isOperator(operator: Operator): boolean {
    switch(operator)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            return true
        default:
            return false
    }
}

function isNumber(str: string): boolean {
    const maybeNum = parseInt(str) // 33 ya da NaN döndü diyelim.
    const isNum: boolean = !isNaN(maybeNum) //NaN olup olmadığını isNaN ile kontrol et.
    return isNum
}

main()