const promt=require('prompt-sync')();
console.log(" Think of a Number Between 1 and 100 ");
var low=0;
var high=100;
Math.round(mid=(low+high)/2);
let number=0;
while(number==0)
{
    console.log("IS this your Number :"+mid);
    console.log("If yes prees 3 to exit")
    console.log("Is your Number less than the above Number then press 1")
    console.log("Is your Number Higher than the above Number then press 2")
    let num= promt ("Enter Value upto what you want to perform Harmonics  : ");
    if(num<0)
    { 
      console.log("Enter a valid number")
    }
        else if(num==1)
        {      
            low=low;
            high=mid-1;
            mid=(low+high)/2;
        }
        else if (num==2)
        {
            low=mid+1;
            high=high;
            mid=(low+high)/2;
        }
        else 
        {
            number=1;        
        }
    


}