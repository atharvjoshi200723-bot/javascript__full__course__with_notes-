//inputiing a number 
alert("hello");
//alert gives a pop up message
prompt("enter your name ");
//prompt can aslo takes an imput 
let num= prompt("enter you lucky number ");
if (num%5==0)
{
    console.log("lucky");
}
else {
    console.log("unlucky");
}
// code which gives grades to studentsn
let maarks=prompt("enter you marks ");
if(maarks<=100 && maarks>=80)
{
    console.log("your grade is A")
}
else if(maarks<80 && maarks>=70)
{
    console.log("your grade is B")
}
else if(maarks<=69 && maarks>50)
{
    console.log("your grade is C")
}
else if(maarks<=50 && maarks>=40)
{
    console.log("your grade is D")
}
else {
    console.log("your grade is F")
}