function myfunction()
{
    //function parameter 
    console.log("we are  goat ");
    console.log("lets have some fun vohuuuuuh");

}

for(let i=0;i<10;i++){
myfunction();//argument
}
//above is function call



function myfunction1(msg,n)
{
console.log(msg*n)
}
myfunction1(34,100);




//function for sum of two number 
function sum(a,b){
console.log("before return");
s=a+b;
return s;
console.log("after return ");

}
let val =sum(234,2345);
console.log(val);



//arrow function part of modern js 
// function can. be stored in  a variable 
const arrowsum = (x,y)=> {
    console.log(x+y)
};


const arrowmul =(x,y)=>
{
    return x*y;
};
// we can alos store any value in arrow fuunction but decare it using let 
//not by const







//for each loop in array
 let arr =[1,2,3,4,5,6,7];
 arr.forEach(function printval(val)
 {
    console.log(val);
 });



 let arr1 = ["pune","delhi","haryana "];
 arr1.forEach((val) =>{
    console.log(val.toUpperCase());
 });







 //we have three parameter we can use iin for each 
 //value
 //index
 //the array itself this is by default we have







 //for each is a higher order function and it can take 
 //another function as a parameter function inside a function 
 //and can also return a function 




 //
//some more array methods
//maps method it is sam elike map method 
//cretes a new array with thr results of some 
//operations the value its call back return are used to for a new array
//arr.map(callbackfuntion(value)
//helps in creating a new array
//for each is used to chnage the preent array





let number = [1,2,3,4];
let number1=number.map((val)=>{
  return val*val;
});
  console.log(number1);

  


  //filter cretes anew array of elemnt that gives true for a condtion 
  let array =[1,2,3,4,5,6];
  let even_array =array.filter ((val)=>{
    return val %2==0;
  })
;
console.log(even_array);





// reduce method preforms some operations and reduces the array to a single vlaue and it return that 
//single value 
let reduce =[1,2,3,4,5,6];
const output1 =reduce.reduce((res,curr)=>{
  return res +curr;
});
console.log(output1);
console.log(output1);
//in this it gvae us the sum of all array elment like we use a for loop
//and do sum = sum +a[i];
let reduce1=[1,34,3,4,5,];
const output2=reduce1.reduce((prev,curr)=>{
  return prev>curr?prev:curr;
});
console.log(output2);