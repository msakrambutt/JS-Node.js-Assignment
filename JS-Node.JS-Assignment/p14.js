//Certified web 3.0 & metaverse course Quater # 1 Assignment Javascript-Node
//Excercise Name: Changing Guest List
console.log("Output Excercise # 15");

//already invited Guests on dinner
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

