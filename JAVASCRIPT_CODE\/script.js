alert("hello losers");
console.log("helllo noobs ");

//windows object 
// the window object represents the open window in a browser it is a browser object (not a java script ) and is 
//automatically created by the browser 
//it is a gloabl object with lots of properties and methods


//console .log is a part of windows and the windows knows it as it is global object 


//when a web page is loaded the browser creates a document object model of the page 
// document is a representation of or html code 
console.log(document.body);

//these are all the part of the windows like it always present in the browser 
//we can see the html code just by checking it 
//we can many info from thses window part
//dom is refer like structur refre notes 4 img
//we use this windows to changing the code in the run time 
//ocument.body.style.background="green" 


//accessing in elemensts in js
//1 slelecting with id 
//document.getElementById("my id")

/*slecting with class
document.getElementByClassName("my class")



3slelcting with tag
document.getElementByTagName("p")
*/

//first method by giving a id 
let heading =document.getElementById("heading");
console.log(heading);
// by giving id in the heading like we assign a class by doing
//id="" type and then use as above 



//2 accessing elementnby class 
let heading1 = document.getElementsByClassName("heading1");
console.log(heading1);







//html collection is a diffrent ype of a struture 

//selecting by tag name 
let parahs = document.getElementsByTagName("p");
console.log(parahs);




//best method is a query selector 
/*document.querySelector ("myis/myclass/tag")
//return first elemnts






document.querySelectorAll("my id /my class/tag")
//return a nodelist
*/

let elemnent=document.querySelector("p");
console.log(elemnent);
elemnent=document.querySelectorAll("p");
console.log(elemnent);

console.dir(document.body.firstChild);


/* 
'tag name :return tag for elemnet node 


inner text: return the text content of the elemenet and all its children


inner html :returns the plain text or html content in the elements


textcontent : returns textual content even for hidden elemnets 
*/

/* inside body there can be div script and etc and 
inside div there can be img h1 p or div which is child so

body is a parent 
div img h1 p or div are the child */


/* when we crete a nod ein dom. we have three crete 
text node sby default
comment 
elements 
we can use these properties of child for accessing things and navigation

*/
let div=document.querySelector("div");//accessing the div
console.log(div);

/*inner text shows only the text 
innerhtml shows us the full data like everything 

if we chnage anythingg in by div.innerText="hi noobs " we can chnage the the html data of that div */

let heading4=document.querySelector("heading");
console.log(heading4);



//attributes in dom manupulation

/*
getAttribute(attr) ---- to get the attribute value



setAttribute(attr,value)------to set the attribute val th




style


node.style*/



let id =div.getAttribute("id");
console.log(id);



let para =document.querySelector("p");
console.log(para.setAttribute("para","newclass"));


let div5=querySelector("div");
console.log(div5);