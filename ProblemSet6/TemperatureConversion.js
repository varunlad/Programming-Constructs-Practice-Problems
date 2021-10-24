const CONVERTION1=1;
const promt=require('prompt-sync')();
let degC= promt ("Enter Temperature in Degree Celcius : ");
let degF=promt("Enter the temperature in Fahrenheit : ");
console.log("Press 1 to convert Degree to Fahrenheit")
console.log("Press 2 to convert Fahrenheit to Degree")
let selection=promt("Enter your Selection ");
TempConvertion(selection);
function TempConvertion(selection)
{
    if(selection==CONVERTION1)
    {

        cov1=(degC*(9/5))+32;
        return console.log("The convertion of degC to degF is :"+cov1);   
    }
    else 
    {  
        con2=(degF-32)*(5/9);
        return console.log("The Convertion of degF to degC is : "+con2);
    }
}