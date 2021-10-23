
let num1=Math.floor(Math.random()*99)+100;
console.log("your First number is " +num1);
let num2=Math.floor(Math.random()*99)+100;
console.log("your second number is " +num2);
let num3=Math.floor(Math.random()*99)+100;
console.log("your Third number is " +num3);
let num4=Math.floor(Math.random()*99)+100;
console.log("your fourth number is " +num4);
let num5=Math.floor(Math.random()*99)+100;
console.log("your Fifth is " +num5);
//Finding the Largest Number
if(num1>num2 && num1>num3 && num1>num4 && num1>num5)
{
    console.log("The Largest Number is : "+num1)
}
 if(num3>num2 && num3>num1 && num3>num4 && num3>num5)
{
    console.log("The Largest Number is : "+num3)
}
 if(num2>num1 && num2>num3 && num2>num4 && num2>num5)
{
    console.log("The Largest Number is : "+num2)
}
 if(num4>num2 && num4>num3 && num4>num1 && num4>num5)
{
    console.log("The Largest Number is : "+num4)
}
if(num5>num1 && num5>num3 && num5>num2 && num5>num4)
{
    console.log("The largest Number is"+num5) 
}
//Finding the smallest Number
if(num1<num2 && num1<num3 && num1<num4 && num1<num5)
{
    console.log("The Smallest Number is : "+num1)
}
if(num3<num2 && num3<num1 && num3<num4 && num3<num5)
{
    console.log("The Smallest Number is : "+num3)
}
if(num2<num1 && num2<num3 && num2<num4 && num2<num5)
{
    console.log("The Smallest Number is : "+num2)
}
if(num4<num2 && num4<num3 && num4<num1 && num4<num5)
{
    console.log("The Smallest Number is : "+num4)
}
if(num5<num2 && num5<num3 && num5<num1 && num5<num4)
{
    console.log("The Smallest Number is"+num5) 
}