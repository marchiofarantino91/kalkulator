
const calcScreen = document.querySelector(".screen");

const updateScreen = (number) =>{
    calcScreen.value = number;
}


let pervNumber = '';
let calcOperator = '';
let currentNumber ='0';

const inputNumber = (number)=>{
    if (currentNumber === '0') {
        currentNumber+=number;
    } else {
        currentNumber += number;
    }

}

const operators = document.querySelectorAll(".operator");

operators.forEach((operator)=>{
    operator.addEventListener("click", (event)=>{
        inputOperator(event.target.value);
    })
})


const inputOperator = (operator) =>{
    if (calcOperator ==='') {
        pervNumber = currentNumber;
    }
    calcOperator = operator;
    currentNumber='0';
}


const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener('click', () =>{
    calculate();
    updateScreen(currentNumber);
})


const numbers = document.querySelectorAll(".number");

numbers.forEach((number)=>{
number.addEventListener("click", (event) =>{
    inputNumber(event.target.value);
    updateScreen(event.target.value);
    
    })
})


const calculate = () =>{
    let result = '';
    switch (calcOperator) {
        case '+':
            result = parseFloat(pervNumber) +parseFloat(currentNumber);            
            break;
        case '-':
            result = parseFloat(pervNumber) -parseFloat(currentNumber); 
            break;
        case '*':
            result = parseFloat(pervNumber) *parseFloat(currentNumber); 
            break;
        case '/':
            result = parseFloat(pervNumber) /parseFloat(currentNumber); 
            break;
        default:
            break;
    }
    currentNumber=result;
    calcOperator='';
}

const cleanBtn = document.querySelector('.all-clear');

cleanBtn.addEventListener('click',()=>{
    clearAll();
    updateScreen(currentNumber);
})

const clearAll = () =>{
    pervNumber ='';
    calcOperator='';
    currentNumber='0';
}



const inputDecimal = (dot)=>{
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber+=dot;
}

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click',(event)=>{
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})
