//strings 
let str = "atharv joshi";
let str2 ="the goat ";







//methods of strinf 
//strlength
//str[0],str[1],str[3]
console.log(str.length);
console.log(str[4]);







//template variable we can write bith string and the varibale together
let specialstring =`this is a template literal ${1+2+3+4}`;
console.log(specialstring);
console.log(typeof(specialstring));








//without template literal
let obj ={
    item:"pen",
    price:10,
};
console.log("the cost of ",obj.item,"is ",obj.price,"dollars");




//with template literal 10 will not highlight as it is count as a whole string 
let output = `the cost of ${obj.item} is ${obj.price} dollars `;
console.log(output);



//escape character
//  \n will get into a next line
// tab character 

let str3 ="atharv\tgoated";
let str4 ="atharv \n goated";
console.log(str3 );
console.log(str4 );




//string methods in js 
let str1 ='anuj payal';
let str5='       bhavan tolia         ';
console.log(str1.toUpperCase(str1));
console.log(str1.slice(0,5));
console.log(str2.concat(str1));
console.log(str1.replace('anuj','atharv'));
console.log(str5.charAt(3));
