let a=0;
let b=0;
let op = "";
const add = (a,b) => a+b ; 
const substract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

entree=document.querySelector("#entree");

btn1=document.querySelector("#1");
function btn1_function(event){entree.value=entree.value+"1";}
btn1.assEventlistener ("click", btn1_function);

