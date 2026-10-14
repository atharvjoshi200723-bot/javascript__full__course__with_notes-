function vowel(str)
{
    let count=0;

    str.toUpperCase(str);
for(const char of str )
{
    if(char=='a'||char=='b'||char=='I'||char=='O'||char=='U')
        count++;
    
}
console.log(count);

};

let str = prompt("enter your string ");
vowel(str);









//for a given array of numbers print the square of each value using a for each loop
let arr =[1,2,3,4,5,6,7];

arr.forEach((arr) =>{
    console.log(arr*arr);
});



//some more array methods
//maps method it is sam elike map method 
//cretes a new array with thr results of some 
//operations the value its call back return are used to for a new array
//arr.map(callbackfuntion(value)









//we are given a  array of marks of students filter out of marks of students that scored 90
let array=[23,45,67,89,90,98,93];
let topper =array.filter((val)=>{
    return val>90;
});
console.log(topper);

//input n element in an array by a user 
let n=prompt("enter n");

for(i=0;i<n;i++)
{
    array[i]=prompt("enter your number s");
}
console.log(n);