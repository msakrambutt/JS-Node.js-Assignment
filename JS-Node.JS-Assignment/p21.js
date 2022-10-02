//Certified web 3.0 & metaverse course Quater # 1 Assignment Javascript-Node
//Excercise Name: Intentional Error
console.log("Output Excercise # 22");

// Error for Array index error
class InvalidArrayIndexError extends Error {};

    var a=["31","55","44","32","4"];
   /*here we increase array index plus one and store in arrlenth variable,run loop till 
    i less then arrLength variable. it will through error because loop run 6 times instead of 5
    times. On sixth index no data found*/
    arrLength=a.length+1;
    try{
    for(i=0;i<arrLength;i++){
    
    if(i==a.length) throw new InvalidArrayIndexError;// create custome error

    console.log(a[i]+"\n");

    }
    }catch(error){
        if (error instanceof InvalidArrayIndexError) {
            console.log('Array index out error');// custome message
    }else{
            // catch any other cases
            console.log(error.message);
    }
    
    
}



//class InputError extends Error {};

// Error for invalid name
/*class InvalidNameError extends Error {};

const isNameRight = name => {
    const validNames = ['joe', 'joan', 'jim'];

    try {
      if (!name) throw new InputError;
      if (!validNames.includes(name))  throw new InvalidNameError;
      console.log('Yes, it is right');
    } catch (error) {
      if (error instanceof InputError) {
        console.error('You didn\'t pass a name!');
        // some extra logic if needed
      } else if (error instanceof InvalidNameError) {
        console.error('This name is not valid!');
        // some different extra logic 
      } else {
        // catch any other cases
        console.error(error.message);
      }
    }
  }*/

 // console.log(isNameRight('ali'));