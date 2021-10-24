const promt=require('prompt-sync')();
const a=promt ('Enter a number :');
console.log("Your a Number is : "+a);
const b=promt ('Enter a number :');
console.log("Your b Number is : "+b);
const c=promt ('Enter a number :');
console.log("Your c Number is : "+c);
let firstOperation=(a+b)*c;
console.log("First Operation Result is :"+firstOperation)
let secondOperation=(a%b)+c;
console.log("First Operation Result is :"+secondOperation)
let thirdOperation=(a/b)+c;
console.log("First Operation Result is :"+thirdOperation)
let fourthtOperation=(a*b)+c;
console.log("First Operation Result is :"+fourthtOperation)
//Finding the Largest Number
if(firstOperation>secondOperation && firstOperation>thirdOperation && firstOperation>fourthtOperation)
{
    console.log("The Largest Number is : "+firstOperation)
}
 if(thirdOperation>secondOperation && thirdOperation>firstOperation && thirdOperation>fourthtOperation)
{
    console.log("The Largest Number is : "+thirdOperation)
}
 if(secondOperation>firstOperation && secondOperation>thirdOperation && secondOperation>fourthtOperation)
{
    console.log("The Largest Number is : "+secondOperation)
}
 if(fourthtOperation>secondOperation && fourthtOperation>thirdOperation && fourthtOperation>firstOperation )
{
    console.log("The Largest Number is : "+fourthtOperation)
}
//Finding the smallest Number
if(firstOperation<secondOperation && firstOperation<thirdOperation && firstOperation<fourthtOperation)
{
    console.log("The Smallest Number is : "+firstOperation)
}
if(thirdOperation<secondOperation && thirdOperation<firstOperation && thirdOperation<fourthtOperation )
{
    console.log("The Smallest Number is : "+thirdOperation)
}
if(secondOperation<firstOperation && secondOperation<thirdOperation && secondOperation<fourthtOperation )
{
    console.log("The Smallest Number is : "+secondOperation)
}
if(fourthtOperation<secondOperation && fourthtOperation<thirdOperation && fourthtOperation<firstOperation )
{
    console.log("The Smallest Number is : "+fourthtOperation)
}