function helo(){
    console.log("hello");
}

setTimeout(helo,16000);





console.log("one");
console.log("go");




setTimeout(()=>{
console.log("waited 12 sec");},12000);




console.log("does not wait 4 sec");

/* this is called asychronous programing as it does not wait for the 
previous code to excute it will run all the next code and then print the 
next */




function sum(a,b)
{
    console.log(a+b);
}
function calc(a,b,sumCallback)
{
    sumCallback(a,b);
}

calc(1,2,sum);
/*functionn as a parameter is know as call back
*/





function getdata(dataid,getnextdata)
{
//console.log("data",dataid);
setTimeout(()=>{
console.log("data",dataid);
    if(getnextdata)//if condn to check data exist or not 

    {
    getnextdata();
    }
},2000);
}



//if we want one by one data then we do asyhnrounous 
 /*getdata(1);
  getdata(2);
   getdata(3);
   

   if we want individual time for above we pass ampther argumnt
   */



   //this below is know as callback hell
   //difficult to understand 
  getdata(1,()=>{
    getdata(2,()=>
    {
        getdata(3,()=>{
            getdata(4,()=>
            {
                getdata(5);
            });
        });
    });
  });


