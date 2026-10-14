
/*
make a button give it text color white
and background color red 
*/
let newbtn=document.createElement("button");
newbtn.innerText="click me ";


newbtn.style.color="white";
newbtn.style.backgroundColor="red";

document.querySelector("body").prepend(newbtn);



/*create a <p> tag in html give it a class and some styleing
now create a new class in css and try to append this class to the the <p>
element 

do you notice how you overwrite the class name 
when you add a new one 
solve thus problem using class list */



/*
we use class when we wnat that the elemnts gets the atrribute of two classes 






div.classlist.remove("foo");
div.classlist.add("noob");

*/
document.querySelector("para").classList.add("newclass");
