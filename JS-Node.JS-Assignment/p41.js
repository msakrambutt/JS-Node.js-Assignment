//Certified web 3.0 & metaverse course Quater # 1 Assignment Javascript-Node
//Excercise Name: Great Magicians
console.log("Output Excercise # 42");

function show_magicians(magicians){
    
    for(i=0;i<magicians.length;i++)
        console.log(magicians[i]);
}


function make_great(magicians){
    //Add 'the Great' to each magician's name.
    for(i=0;i<magicians.length;i++){
        
        magicians[i] = magicians[i]+' the Great';
        console.log(magicians[i]);
    }

    
}

var magicians = ['Apollo Robbins', 'David Devant', 'David Blaine'];
show_magicians(magicians);
console.log("\n");
make_great(magicians);
console.log("\n");
// now we append the Greet with magicians name and agian print this array 
show_magicians(magicians);