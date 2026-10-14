//if statement 



let age =16;
if(age>=18)
{
   console.log("you can vote");
}
if(age<18)
{
   console.log("you cannot vote");
}
//if else block





let mode="brown";
let colour;
if(mode==="dark")
{
   console.log("dark");
}
else {
    colour="white ";
    mode="white";
}

if(mode==="white")
{
   console.log("bright");
}
// else if block




let num =1234;
if(num%2==0)
{
    console.log("even");

}
else if (num==1){
    console.log("one ")
}
else{
    console.log("odd");
}
//ternary operator 




age=16;
let result =age>=18 ? "adult":"not adult";
console.log(result);
age>=18 ? console.log( "adult"):console.log("not adult");
//switch case


const expr='papapya';
switch(expr){
    case 'orange':
        console.log("ornages are sweet ");
        break;
        case 'mangoes':{
            console.log("mangoes are juicy");
            break;
        }
            case 'papapya':{
                console.log("papapya are good for health ");
                break;
            }default:
            console.log("all fruits are good");
}




//input something