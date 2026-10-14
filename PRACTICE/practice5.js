let h2 =document.querySelector("h2");
console.log(h2.innerText);
h2.innerText=h2.innerText+"you are a bot";
let divs = document.querySelectorAll(".box");
console.log(divs);
console.log(divs[1]);
console.log(divs[2]);
console.log(divs[0]);



divs[1].innerText="new value is is 2 ";
for(div of divs){
    console.log(div.innerText);
}
divs[0].innerText="new value is ";
let idx=1;
for(div of divs){
    div.innerText=`new text edited ${idx}`;
    idx++;
}
for(div of divs){
    console.log(div.innerText);
}