//Certified web 3.0 & metaverse course Quater # 1 Assignment Javascript-Node
//Excercise Name: Hello Admin
console.log("Output Excercise # 30");
var usernames=["shahid","admin","ali","asif","bilal"];

for(j=0;j<usernames.length;j++){
    if(usernames[j] === "admin"){
        console.log("Hello "+usernames[j]+", would you like to see a status report?")
    }else{
        console.log("Hello "+usernames[j]+", thank you for logging in again.")

    }
}