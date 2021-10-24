const promt=require('prompt-sync')();
let number= promt ("Enter a number for its Factorial : ");
let factorial=1;
for(i=2;i<=number;i++)
{
   factorial=factorial*i;
}
console.log("The factorial of "+number+" is :"+factorial)