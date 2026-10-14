/*if we want to access the style pf our div
 then we can use this method gievn below for chnage 
 see index4.html
*/
let div =document.querySelector("div");

/* we can chnage any style even font and everyhting by using 
div.style.______
*/
div.style.backgroundColor="pink";


/*how can we insert elements 
let el =document.createElement("div");


node.append(el)--adds at the end of the node(inside)


node.pretend(el)-----adds to the start of node(inside)


node.before(el)----- adds bef0re the node(outisde)


node.after(el)-------------adds after the node (outside)




DELETE ELEMENT 

node.remove()------------remove the node 
*/

let newbtn=document.createElement("button");

newbtn.innerText="click me ";
console.log(newbtn);


div.append("item5");

div.prepend('item5');

let newheading=document.createElement("h1");
newheading.innerHTML="<i>hi i am made using create element</i>";
document.querySelector("body").prepend(newheading);



let para=document.querySelector("p");
para.remove();