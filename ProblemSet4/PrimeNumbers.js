const promt=require('prompt-sync')();
let number= promt ("Enter a number to check prime or not: ");
let num=0;
for(i=3;i<number;i++)
{
    if(number%i==0)
    {
        num=1;
        break;
    }

}
if(num==1)
    console.log("The number is not a prime number")
else

    console.log("The number is prime number")
