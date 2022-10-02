//Certified web 3.0 & metaverse course Quater # 1 Assignment Javascript-Node
//Excercise Name: Sandwiches
console.log("Output Excercise # 44");

//Send an array as parameter using JavaScript Rest Parameters(...parametername)
var make_sandwich= function (...items){

    //Make a sandwich with the given items.

    console.log("\nI'l will make you a great sandwich")
    items.forEach(id => console.log("Adding "+id+" to your sandwich"));
    console.log("Your sandwich is ready!");

}

make_sandwich('beef', 'cheese','honey');
console.log("\n");
make_sandwich('russian salad', 'apple slices', 'honey');
console.log("\n");
make_sandwich('butter', 'apple jam');
console.log("\n");

