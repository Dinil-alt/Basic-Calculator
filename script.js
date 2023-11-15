
//to display the number in the inputbox 

function displayNum(num){
        result.value+=num;
}

// clear text box

function clearBox(){
    result.value = "";
}

//to evaluate expression

function evaluateExpression(){
    exp =result.value;
    output=eval(exp); //eval() - to evaluate any expression
    result.value =output;
}

//to remove last element

function removeLastElement(){
    result.value=result.value.slice(0,-1);
}