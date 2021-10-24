//const promt=require('prompt-sync')();
function Palindrome()
{
    let number= 12342;//promt ("Enter a number to check Palindrome : ");
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
Palindrome();