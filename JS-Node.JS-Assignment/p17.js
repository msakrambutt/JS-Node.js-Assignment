//Certified web 3.0 & metaverse course Quater # 1 Assignment Javascript-Node
//Excercise Name: Seeing the World
console.log("Output Excercise # 18");
//function will received unsorted array and return sorted data
var places_pakistan=["Pir Chinasa","Swat","Azad Kashmir","Neelam Vally","Kiran Lake"];

function sorting(arr){// by using slice function with sort becuase slice create shallow copy
    
    return arr.slice().sort();
    
    
}

//function will received unsorted array and return in reverse order
function reverse(arr1){
    return arr1.slice().reverse();

}

console.log("First show array in orginal order\n");
console.log(places_pakistan+"\n");

console.log(" Array in aphabatical order\n");
console.log(sorting(places_pakistan));

console.log("\nNow again show array in original order\n");
console.log(places_pakistan+"\n");

console.log("\nNow  show array in reverse order\n");
console.log(reverse(places_pakistan)+"\n");

console.log("\nNow again show array in original order\n");
console.log(places_pakistan+"\n");

console.log("\n Original array reversed\n");
places_pakistan.reverse();
console.log(places_pakistan+"\n");

console.log("\n Again reversed array and now back to its original order\n");
places_pakistan.reverse();
console.log(places_pakistan+"\n");

console.log("\nSort Array in aphabatical order and now its order changed\n");
places_pakistan.sort();
console.log(places_pakistan);

console.log(" \nSort Array in reversed order and now its order changed\n");
places_pakistan.reverse();
console.log(places_pakistan);














