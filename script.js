let counterDisplayElem = document.querySelector('.num');
let counterMinusElem = document.querySelector('#left');
let counterPlusElem = document.querySelector('#right');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
   count++;
   updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
   count--;
   updateDisplay();
});

function updateDisplay(){
   counterDisplayElem.innerHTML = count;
};