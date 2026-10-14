let promise=new Promise((resolve,reject)=>
    {
        console.log("i am promise ");
        resolve("success");
        reject("error");
    });
    /*promis eis obj in js 
    which has three state pending ,reoslve rejceted
    in genral programing we do not make promise we us ecall it like for example api keys 
    etc dusre system create karte hai promise s
     */

function getdata(dataid,getnextdata)
{
    return new Promise((resolve,reject)=>
    
    {
        //console.log("data",dataid);
setTimeout(()=>{
console.log("data",dataid);
resolve("success");
    if(getnextdata)//if condn to check data exist or not 

    {
    getnextdata();
    }
},10000);
    });

}



/*
we have two function to use promise for our own


promise.then((res)=>{.......})
for message fullfied then use this 


promise.catch((res)=>{.......})
for error use this 
*/

 const getpromise=()=>

    {
       return new Promise((resolve,reject)=>
        
        {
            console.log("i am promise");
            resolve("success");
        });
    };

    let promise1=getpromise();
    promise.then(()=>
    {
        console.log("promise fullfiled ");
    });

    promise.catch(()=>
    {console.log("rejected ")

    });







    //promise chain


    function asynfunc()
    {
        return new Promise((resolve,reject)=>
        
        {
            setTimeout(()=>
            {
                console.log("some data1");
                resolve("success");
            },2000);
        });
    }

        
    //the above is used by api for calling function


    console.log("fetching data1.....");
    let p1=asynfunc() ;
        p1.then((res)=>
        {
            console.log(res);
        });


        //now say we have multiple data coming 

        function asynfunc1()
    {
        return new Promise((resolve,reject)=>
        
        {
            setTimeout(()=>
            {
                console.log("some data2");
                resolve("success");
            },4000);
        });
    }
    function asynfunc2()
    {
        return new Promise((resolve,reject)=>
        
        {
            setTimeout(()=>
            {
                console.log("some data3");
                resolve("success");
            },8000);
        });
    }
    function asynfunc3()
    {
        return new Promise((resolve,reject)=>
        
        {
            setTimeout(()=>
            {
                console.log("some data4");
                resolve("success");
            },10000);
        });
    }
  console.log("fetching data2.....");
    let p2=asynfunc1() ;
        p2.then((res)=>
        {
            console.log(res);
        });
          console.log("fetching data3.....");
    let p3=asynfunc2() ;
        p3.then((res)=>
        {
            console.log(res);
        });  console.log("fetching data4.....");
    let p4=asynfunc3() ;
        p4.then((res)=>
        {
            console.log(res);
        });





        //if we want to call data one by one then we se promise chain then inside then
        console.log("fetching api key ");
        let p5=asynfunc() ;
        p5.then((res)=>
        {
console.log("fetching api key 2 ");
let p6=asynfunc1() ;
p6.then((res)=>
{});
        });





        

