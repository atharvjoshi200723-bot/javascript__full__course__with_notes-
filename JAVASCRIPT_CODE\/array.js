let marks =[97,82,36,78];
console.log(marks);
console.log(marks.length);
let heros = ["iron man ","mighty raju","hacker","atharv joshi","anuj payal","ant man "];
console.log(heros);
console.log(typeof(heros));
for(let i=0;i<heros.length;i++)
{
    console.log(heros[i]);
}
for (let hero of heros)
{
    console.log(hero.toUpperCase());
}




//array methods 
//push() add to end
//pop() delete from end to return
//toString covert array  to string
//concat() join multiple arrays 
//unshift ()add to strt 
//shift() DELETE from s tart and return
//slice () return a piece of array
//slice(startidx,endidx)
//splice() change orignianl array (add,remove,replace)
//splice (startidx,delcount,new1l1)
//startidx kaha se start karna hai 
//delcount kitne dekete karne hai
// new elemte new elemnet 










let food=["apple","litchi","burger ","chips","momo"];

console.log(food);
food.push("panner");
console.log(food);
food.push("briyani","chicken","fish");
console.log(food);
food.pop();
console.log(food);
food.pop();
console.log(food);
food.pop();
console.log(food);
food_lover = heros.concat(food);
console.log(food_lover);
food.pop();
console.log(food);


console.log(food.slice(1,2));

let arr=[1,2,3,4,5,6,7,8];
arr.splice(2,2,101,102);
console.log(arr);



//add elemnent 
arr.splice(3,1);
console.log(arr);



// dlelete elemt 
arr.splice(3,1);
console.log(arr);


//replace element 
arr.splice(3,1,10234);
console.log(arr);




