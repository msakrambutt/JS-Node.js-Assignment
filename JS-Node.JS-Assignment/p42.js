//Certified web 3.0 & metaverse course Quater # 1 Assignment Javascript-Node
//Excercise Name: Unchanged Magicians
console.log("Output Excercise # 43");
var great_magicians=[];

function show_magicians(magicians){
    
    for(i=0;i<magicians.length;i++)
        console.log(magicians[i]);
}


function make_great(magicians){
    //Add 'the Great' to each magician's name.
    for(i=0;i<magicians.length;i++){
        great_magicians[i]=magicians[i];
        magicians[i] = magicians[i]+' the Great';
        console.log(magicians[i]);
    }

    
}

var magicians = ['Apollo Robbins', 'David Devant', 'David Blaine'];
console.log("\nOriginal Magicians");
show_magicians(magicians);

console.log("\nGreet Magicians");
make_great(magicians);

console.log("\nOriginal Magicians");
// now we append the Greet with magicians name and agian print this array 
show_magicians(great_magicians);