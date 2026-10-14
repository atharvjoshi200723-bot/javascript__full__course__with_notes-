// fetch(URL,[options ]);



const URL="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo";
const dataPara =document.querySelector("#data");
const btn = document.querySelector("#btn");
let promise = fetch(URL);
console.log(promise);


const getdata= async()=>{
    console.log("getting stock market data.............");
    let response = await fetch(URL);
    console.log(response);
    let data= await response.json();
    console.log(data);
    console.log(data["Meta Data"]["2. Symbol"]);
    dataPara.innerText= data["Meta Data"]["2. Symbol"];
  console.log(data["Time Series (Daily)"]);

};
btn.addEventListener("click",getdata);