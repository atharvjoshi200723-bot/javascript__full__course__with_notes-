/*create a toggle button that chnages the screen to dark mode when clicked 
and to light mode when clicked again 
*/



let modebtn=document.querySelector("#change");



let currmode="light";



modebtn.addEventListener("click",()=>
{
    if(currmode=="light")
    {
        currmode="dark";
        document.body.style.backgroundColor="black";
    }
    else
    {
        currmode="light";
        document.body.style.backgroundColor="white";
    }
    console.log(currmode);
})