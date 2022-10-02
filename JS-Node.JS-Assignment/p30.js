//Certified web 3.0 & metaverse course Quater # 1 Assignment Javascript-Node
//Excercise Name: No Users
console.log("Output Excercise # 31");

var usernames=[];
if(usernames.length>0){
for(j=0;j<usernames.length;j++){
    if(usernames[j] === "admin"){
        console.log("Hello "+usernames[j]+", would you like to see a status report?")
    }else{
        console.log("Hello "+usernames[j]+", thank you for logging in again.")

    }
}
}else
{
    console.log("\nWe need to find some users!");
}