let btn1=document.querySelector("#btn1");


btn1.onclick=()=>{
    console.log("i am clicked");
    let a=25;
    a++;
    console.log(a);
};
let box=document.querySelector("#box");
box.onmouseover=()=>{
    console.log("you are hovered ");
};




/*
node.event()=>{
    }
format to access the htl we want to control





and if we make two same node evnt like accessing or controling to event the forst one will get overwrite by the last one 




event object 
it is a special object thatbhas details about the event 
all event handlers have access to the event objects properties and methods 


node.event(e)=>
{}
    */





btn2.onclick=(evt)=>{
    console.log(evt);
   console.log(evt.type);
       console.log(evt.target);  
           console.log(evt.clientX,evt.clientY);
};




/*event listners we can do multiple works on a single event 

node.addEventListner(event,callback)





node.removeEventListner(event,callback)


note callback refrenece should be the same to remove
*/

let btn3=document.querySelector("#btn3");

btn3.addEventListener("click",(evt)=>{
    console.log("button 3 was clicked ");
        console.log(evt);
   console.log(evt.type);
       console.log(evt.target);  
           console.log(evt.clientX,evt.clientY);
});


btn3.addEventListener("click",(evt)=>{
    console.log("button 3 was clicked ");
});

const handler3=(evt)=>{
    console.log("button 4 was clicked ");
};

btn3.addEventListener("click",handler3);
btn3.addEventListener("click",(evt)=>{
    console.log("button 5 was clicked ");
});

/*now if we want to remove any event listner we can do it by 
this given below
*/


btn3.removeEventListener("click",handler3);
