//Certified web 3.0 & metaverse course Quater # 1 Assignment Javascript-Node
//Excercise Name: They think of something you could store in a JavaScript Object
console.log("Output Excercise # 21");

//create objects by using object literal approach
console.log("create object by using object literal approach\n");
var course={
    Rollno:196272,name:"sahhid",courseTile:"Metaverse web 3.0"
};
console.log("PIAIC Roll #: "+course.Rollno+" "+"Name: "+course.name+"Course Title: "+course.course+"\n");

//create objects by using instance of object
console.log("create objects by using instance of object\n");
var Employee=new Object();
Employee.id=1;
Employee.name="Shahid";
Employee.salary=35000;
console.log("Employee Id: "+Employee.id+" "+"Employee Name: "+Employee.name+"Employee Salary: "+Employee.salary+"\n");

//create objects by using Object Constructor
console.log("create objects by using Object Constructor\n");
function emp(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;
}

var e=new emp(2,"Akram Butt",50000);
console.log("Emp Id: "+e.id+" "+"Emp Name: "+e.name+" Emp Salary: "+e.salary+"\n");



