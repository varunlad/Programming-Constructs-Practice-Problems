const promt=require('prompt-sync')();
const number=promt ('Enter a number :');
console.log("Your Number is : "+number)
if(number>0)
{
    let unit=(number%10);
    console.log("Unit Place is: "+unit)
    let number=number/10
    if(number>0){
    let ten=number%10
    console.log("The Ten's Place Number is : "+ten)
    let number=number/10
    }
    if(number>0){
    let Hundred=(number%10)
    console.log("The Hundred Place Number is : "+Hundred)
    let number=number/10
    }
    if(number>0){
    let Thousand=(number%10)
    console.log("The Thousand's Place Number is : "+Thousand)
}
}
else 
{
   console.log("Enter a Valid Number")
}