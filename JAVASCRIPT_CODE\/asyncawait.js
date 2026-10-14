

function api()
{
    return new Promise((resolve,reject)=>
    {
        console.log("api called");
        setTimeout(()=>
        {
                  console.log("api called");
            resolve(200);
        },2000);
});
}


async function getweatherdata()
{
    await api();
    await api();
}


/*we use this so that we can check our data one by one like if first is called then the second should be
be called like in instagram first username gets checked and then pass word 
like one by one */



function getdata(dataid)
{
    return new Promise((resolve,reject)=>
    {
        console.log("fetching data..........",dataid);
        setTimeout(()=>
        {
                  console.log("api called",dataid);
            resolve(200);
        },2000);
});
}

async function getalldata()
{
    await getdata(1);
       await getdata(2);
          await getdata(3);
             await getdata(4);
                await getdata(5);
                   await getdata(6);   
                      await getdata(7);
}

/* we hvae to have to call getalldata function and it is unecessary so 
we use iife function to call it automatically and we can use async await in it as well */

(async function ()
{
    await getdata(1);
       await getdata(2);
          await getdata(3);
             await getdata(4);
                await getdata(5);
                   await getdata(6);   
                      await getdata(7);
})();

//above is code of IIFE function
//.   (function)();