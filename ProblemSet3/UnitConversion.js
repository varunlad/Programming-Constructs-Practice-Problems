const promt=require('prompt-sync')();
const feet= promt ("Enter Value in Feet");
const inch= promt ("Enter Value in inch ");
const meter=promt ("Enter Value in meter");
console.log( "case 1: feet to inch");
console.log( "case 2: inch to feet")
console.log( "case 3: feet to meter")
console.log( "case 4: meter to feet")
const number=promt ('Enter a number :');
switch(number)
{
    case 1:
    let conversion1=feet*12;
    console.log("The "+feet+" feet ="+conversion1+" inch")
    break;
    case 2:
    let conversion2=inch/12;    
    console.log("The "+inch+" inch ="+conversion2+" feet")
    break;
    case 3:
    let conversion3=feet*0.3048;
    console.log("The "+feet+"feet ="+meter+" Meter")
    break;
    case 4:
    let conversion4=meter*3.2808;
    console.log("The "+meter+" meter ="+conversion4+"feet")
    break;
    default :
    console.log("Enter a valid case ")
}
