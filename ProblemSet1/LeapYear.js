const promt=require('prompt-sync')();
const year=promt ('Enter a Year :');
if (((year%4==0 && year%100!=0) || (year%400==0)))
{
    console.log("The Year is a Leap Year")
}
else
{
   console.log("The Year is Not a Leap Year")
}