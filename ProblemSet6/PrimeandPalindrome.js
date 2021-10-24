const promt=require('prompt-sync')();
let number= promt ("Enter a number to check prime or not: ");
let num=0;
primeNumberandPalindrome();
function primeNumberandPalindrome()
{
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
    let temp=number;
    let rev=0;
    while(temp>=1)
    {
        Math.trunc(num=temp%10);
        Math.trunc(rev=rev*10+num);
        Math.trunc(temp=temp/10);
    }
    if(rev=number)
    {
        console.log("The number is a Palindrome")
    }
    else
    {
       console.log("The number is not a Palindrome")
    }
}
