const promt=require('prompt-sync')();
let number= promt ("Enter Value upto what you want to perform Table of 2 : ");
for(i=1;i<=number;i++)
{
    let num=i*2;
    console.log(num);
}