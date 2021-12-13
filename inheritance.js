class User{
    static count = 0;
    constructor(username,id,password){
        this.username=username;
        this.id=id;
        this.password = password;
        User.count++;
    }
    registeredUser(){
        console.log(this.username + " is registered");
    }
    noOfRegisterUser(){
        console.log('total no of users are : '+ User.count);
    }
}
// const Jordan = new User('jordan','jorgdan@gmail.com','nike147');
// Jordan.noOfRegisterUser();

// const elliot = new User('jelliot','elliotn@gmail.com','nua147');
// elliot.noOfRegisterUser();
// elliot.registeredUser();
// const malcom = new User('malcom','malkom@gmail.com','adi147');
// elliot.noOfRegisterUser();
// malcom.noOfRegisterUser();

class Member extends User{
    constructor(username,id,password,MemberPackage){
        super(username,id,password);
        this.package = MemberPackage;
    }
    getPackage(){
        console.log(this.username + " is now registered to "+ this.package +" package");
    }
}
const Milner = new Member('milner','alognh@gmail.com','12344','Standard');
Milner.getPackage();
Milner.noOfRegisterUser();
Milner.registeredUser();