//Certified web 3.0 & metaverse course Quater # 1 Assignment Javascript-Node
//Excercise Name: More Conditional Tests
console.log("Output Excercise # 24");

let course1="METAVERSE";
let course2="MetaVerse";
let name_lower="metaverse";
let name_upper="METAAVERSE";
let num1=5;
let num2=6;


//test for equality of strings

if (course1 === "METAVERSE")
{
    console.log("\nCondition matched. Answer is "+(course1 === "METAVERSE"));
}
//test for Inequality of strings
if(course2 != "METAVERSE")
{
    console.log("\nCondition not matched. Answer is "+(course2 === "METAVERSE"));
}
//test using the lowercase function
if(name_lower.toLowerCase()){
    console.log("\n All string characters are in lowercase");

}
//test using the uppercase function
if(name_upper.toUpperCase()){
    console.log("\n All string characters are in uppercase\n");

}

/*Numerical tests of two numbers put fixed value in variables because we print output on console.
otherwise i get two numbers input from user and show result on browsers
num1=parseInt(prompt("Enter First number for matching"));
num2=parseInt(prompt("Enter Second number for matching"));*/


if(num1 === num2){
    console.log("\n Both numbers are equal\n");

}else if(num1 != num2){
    console.log("\n Both numbers are not equal\n");

}else if(num1>num2){
    console.log("\n number1 is greater the number2\n");

}else if(num1<num2){
    console.log("\n number1 is less the number2\n");

}else if(num1>=num2){
    console.log("\n number1 is greater or equal to number2\n");

}else if(num1<=num2){
    console.log("\n number1 is less or equal to number2\n");

}
//Tests using "and" and "or" operators
let num3=7;
let num4=9;
// By using && opeartor Answer is true when all conditions are true
if(num3 === num4 && num3 < num4){
    console.log("\n By using and operator Answer is True \n");

}else
{
    console.log("\n By using and operator Answer is False \n");
  
}


// By using || opeartor Answer is true if any one conditions is true
if(num3 === num4 || num3 < num4){
    console.log("\n By using or operator Answer is True \n");

}else
{
    console.log("\n By using or operator Answer is False \n");
  
}
//Test whether an item is in a array or not
var arr=["pen","pencil","scale"];
var item="pen";
if (arr.includes(item)){
    console.log("\nItem found in array")
}else{
    console.log("\nItem not found in array")

}

