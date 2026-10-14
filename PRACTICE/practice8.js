/*
you are creating a websote for you collhge create a user class with two 
properties name and email
it aslo has a mthod called viewdata()
that allows user to view website data



create a new class called admin which inherits from 
user add a new method called editdata to admin 
it to edit website data*/






//q1
class user {
    constructor(name ,email)
    {
this.name=name;
this.email=email;

    }
    viewdata()
    {
        console.log("data=",data);
    }
}


/*let student1 = new user ("atharv","atharvjoshi@email.com");
let student2 = new user ("anuj pagal","anuj payal@email.com");
let teacher1 = new user ("dean","dean@clg.com");
let teacher2 = new user ("hod","hod@email.com");
*/





//q2
let data ="old info";

class admin extends user{
    constructor(name,email){
        super(name,email);

    }
    editdata()
    {
        data="data edited " 
       }
}
let student1 = new user ("atharv","atharvjoshi@email.com");
let student2 = new user ("anuj pagal","anuj payal@email.com");
let teacher1 = new user ("dean","dean@clg.com");
let teacher2 = new user ("hod","hod@email.com");
let admin1 = new admin("admin","admin@email.com")

