//Certified web 3.0 & metaverse course Quater # 1 Assignment Javascript-Node
//Excercise Name: More Guests
console.log("Output Excercise # 16");

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
guests[2]="Asif";
guests.push("bilal");

for(i=0;i<guests.length;i++){
    console.log("Hello my dear "+guests[i]+", please come to dinner");

}
