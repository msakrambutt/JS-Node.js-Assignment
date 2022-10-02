//Certified web 3.0 & metaverse course Quater # 1 Assignment Javascript-Node
//Excercise Name: Shrinking Guest List
console.log("Output Excercise # 17");
//invited Guests on dinner
var guests=["Abdul Qadeer","Aqeel","Murtaza"];

console.log("Hello my dear "+guests[0]+", please come to dinner");
console.log("Hello my dear "+guests[1]+", please come to dinner");
console.log("Hello my dear "+guests[2]+", please come to dinner\n");

var refuse_guest=guests[1];

console.log(refuse_guest+",excuse cann't make dinner\n");

// Aqeel cann't make it ! so i invite Mazhar instead of aqeel
var newGuests="Mazhar";
guests[1]=newGuests;

// Now invitations again to Guests
console.log("Now again invitations to Guests\n")
console.log("Hello my dear "+guests[0]+", please come to dinner");
console.log("Hello my dear "+guests[1]+", please come to dinner");
console.log("Hello my dear "+guests[2]+", please come to dinner\n");

// Now we have bigger table , so add more guests in the list
console.log("Our table is now bigger!\n");
guests.unshift("Ali");
guests.splice(3,0,"Asif");
guests.push("bilal");

for(i=0;i<guests.length;i++){
    console.log("Hello my dear "+guests[i]+", please come to dinner");

}

// Dinner table won't arrive on time
console.log("\n Now we only invite two person to dinner\n");
for(j=0;j<guests.length+1;j++){
    var rmGuests=guests.shift();
    console.log("Sorry  "+rmGuests+", there is no space at the dinner table");

}
// now only two person left. Again invite these two
console.log("Hello my dear "+guests[0]+", please come to dinner");
console.log("Hello my dear "+guests[1]+", please come to dinner");

// empty the list
guests.pop();
guests.pop();

// print the list
console.log(guests);



