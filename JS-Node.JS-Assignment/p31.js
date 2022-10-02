//Certified web 3.0 & metaverse course Quater # 1 Assignment Javascript-Node
//Excercise Name: Checking Usernames
console.log("Output Excercise # 32");

var current_users=["ali","asif","akram","Bilal","hassan"];
var new_users=["kashif","hassan","asif","bilal","aqeel"];
var current_users_lower=[];
//convert current_users array into small alphabets
for(j=0;j<current_users.length;j++){
    current_users_lower[j]=current_users[j].toLocaleLowerCase();
}


for(i=0;i<current_users.length;i++){
    if(new_users[i].toLocaleLowerCase() == current_users_lower[i]){
        console.log("Person "+new_users[i]+" will need to enter new username");
    }else{
        console.log(new_users[i]+" username is available");

    }


}

