let HeadCount=0;
let TailCount=0;
let num=true;
while(num)
{
    let coin=Math.floor(Math.random()*2);
if(coin==1)
{
    console.log("Its Heads")
    HeadCount++;
    if(HeadCount==11)
    {
        HeadCount=11;
        break;
    }
}
else
{
    console.log("Its Tails")
    TailCount++;
    if(TailCount==11)
    {
        break;
    }   
}
}
if(HeadCount==11)
{
    console.log("Head Has won")
}
else
{
    console.log("Tail has won")
}
