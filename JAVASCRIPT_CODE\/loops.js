//loops in java script
for(let i=0;i<20;i++)
{
    console.log(i);
}
console.log("while loop");
let num =0;
while(num<20){
console.log(num);
num++;
}
console.log("do while loop");
let n=2;
do{
    console.log("atharv is the goat" ,n);
    n++;
}while(n<=10);
//loops in java script


let str="atharv joshi "
for( let t of str){
    console.log("t=",t);

}
// for in loop



let student ={
    name:"anuj payal",
    age :20,
    cgpa:7.5,
    ispass:true
};
for (let key in student)
{
    console.log("key is" ,key, "value of key is",student[key]);
}