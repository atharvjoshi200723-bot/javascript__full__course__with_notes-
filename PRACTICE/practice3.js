
let company=[];
let n=prompt("enter no of comapny");
for (let i=0;i<n;i++)
{
  company[i]=prompt("enter company names "  );
}
console.log(company);
company.splice(2,1,"hola");
company.push("amazon");
company.shift();
console.log(company);