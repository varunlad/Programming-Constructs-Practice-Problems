const promt=require('prompt-sync')();
const number= promt ("Enter Value to get is prime factors");
for(i=2;i<number/2;i++)
{
    if(number%i==0)
    console.log(i)
}