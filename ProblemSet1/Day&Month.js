const promt=require('prompt-sync')();
const date=promt ('Enter a date :');
const month=promt('Enter a month: ');
if((date>=20 && month>=3) ||(date<=20 && month<=7))
{
  console.log("The date is between 20th March and 20th June ")
}
else 
{
    console.log("Date is out of Range")
}