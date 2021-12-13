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

class Member extends User{
    constructor(username,id,password,MemberPackage){
        super(username,id,password);
        this.package = MemberPackage;

        let todaysDate = new Date();

        const membershipactivetillYear = todaysDate.getFullYear();
        const membershipactivetillMonth = todaysDate.getMonth();
        const membershipactivetillDay = todaysDate.getDay();
        
        this.membershipactivetilldate = new Date(
        membershipactivetillYear,
        membershipactivetillMonth,
        membershipactivetillDay
        );
    }
    renewMembership() {
        const membershipactivetillYear = this.membershipactivetilldate.getFullYear();
        const membershipactivetillMonth = this.membershipactivetilldate.getMonth();
        const membershipactivetillDay = this.membershipactivetilldate.getDay();
    
        this.membershipactivetilldate = new Date(
          membershipactivetillYear,
          membershipactivetillMonth + 1, //just increase the month by 1
          membershipactivetillDay
        );
      }
    
      subscriptionActiveTill() {
        console.log(
          this.username +
            " is scubscribed to " +
            this.package +
            " uptill " +
            this.membershipactivetilldate
        );
      }
    getPackage(){
        console.log(this.username + " is now registered to "+ this.package +" package");
    }
}
const milner = new Member("milner", "abc@gmail.com", "pass123", "Standard Packege");

//milner.getPackage();

milner.renewMembership();
milner.subscriptionActiveTill();