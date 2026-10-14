const student ={
    name:"atharv joshi",
    marks:100,
    printmarks :function()
    {
        console.log("marks=",this.marks );

    },
};

//classes in js 

class car{
    constructor()
    {
        console.log("created a constructer ");
    }
 
    start()
    {
        console.log("start");

    }
    stop()
    {
        console.log("stop");
    }

    setbrand(brand)
    {
        this.brandname=brand;
    }
}

let fortuner = new car();
fortuner.setbrand("fortuner ");

let audi=new car();




class car1{
   constructor(brand,mileage){
        console.log("new cinstructor");
        this.brand=brand;
        this.mileage=mileage;
    }
}
let activa = new car1("honda",123);



class parent{
    hello()
    {
        console.log("hello");
    }
}

class child extends parent{}
    let obj = new child();



    class person{
        constructor()
        {
  this.species="humans";
        }
        eat()
        {
            console.log("eat");
        }

        sleep(){
            console.log("sleep");
        }
    }
//below is the syantax for iunheritance

    class enginerr extends person{
        work()
        {
            console.log("good for problem solving ");


        }
      constructor(branch)
{
    super()// to invoke parent class constructor 
this.branch=branch;
}
    }
    let atharv1 = new enginerr();
    let anuj1= new enginerr("chemica; engineer");

    

    