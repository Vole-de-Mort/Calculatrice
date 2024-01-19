function add(a ,b){return a+b};
function substract(a,b){return a-b};
function division(a, b){return Math.round(a/b)};
function multiply(a ,b){return a*b};
function operate(operator, a, b) {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      default:
        return "Invalid operator";
    }
}

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
var ch1 = '';
var ch2 = '';
var op='';

buttons.forEach((button)=>{
  button.addEventListener('click', ()=>{
    if(button.value=='del'){
      ch1 ='';
      ch2 ='';
      op = '';
      display.innerHTML = '';
    }else if(ch1 !==''&& ch2 !==''){

      res =  operate(op,parseInt(ch1, 10),parseInt(ch2,10));
      display.innerHTML = res;
      ch1 = res ;
      ch2='';
      op='';
    }else if(button.value=='='){

      res =  operate(op,parseInt(ch1, 10),parseInt(ch2,10));
      display.innerHTML = res;
      ch1 = res ;
      ch2 = '';
      op = '';
    }else if (op!==''){

      display.innerHTML += button.value;
      ch2 = display.innerHTML;
    }else if(button.value !== '+' && button.value !== '-' && button.value !== '/' && button.value !='*'){
      
      display.innerHTML +=button.value;
      ch1 = display.innerHTML;
    }else{
      
      op = button.value;
      display.innerHTML = '';
    }
  });
});
