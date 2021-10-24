const promt=require('prompt-sync')();
let number= promt ("Enter Value upto what you want to perform Harmonics  : ");
let num=0;
for(i=1;i<=number;i++)
{  
    num=num+(1/i);
}
console.log(""+num);