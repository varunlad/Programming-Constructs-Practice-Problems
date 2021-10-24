let number=100;
console.log("The Gambler has Start with rupess : "+number)
while(number<201 && number>1)
{
    let Gamble=Math.floor(Math.random()*3);
    if(Gamble==1)
    {
        console.log("Won")
        number=number+2;
        if(number>=200)
        {
            number=200;
            break;
        }
    }
    else
    {
       console.log("Lost")
       number=number-1;
       if(number==0)
       {
           number==0;
           break;
       }
    }
}
if(number>=200)
{
    console.log("The Gambler has Won the Game");
}
else
{
   console.log("The Gambler has lost the Game");
}
