//Certified web 3.0 & metaverse course Quater # 1 Assignment Javascript-Node
//Excercise Name: Think of something you could store in a array
/*var mountains=["Karakoram","K2","Nanga Parbat"];
var rivers=["Ravi River","Indus River","Chenab River"];
var countries=["Pakistan","UAE","Turkey"];
var cities=["Lahore","Karachi","Islamabad"];
var languages=["Urdu","English","Punjabi"];*/

console.log("Output Excercise # 20");//pending
class List {
    constructor(mountain, river, country, city, language) {
      this.mountain = mountain;
      this.river = river;
      this.country = country;
      this.city = city;
      this.language=language;
    }
  }
  
  let list = new List("Nanga Parbat", "Ravi", "Pakistan", "Lahore","Urdu");
  console.log(list.mountain+ ",is the biggest mountain of ", list.country, "and river ", list.river, "is in "+list.city+" city and language of the people is "+list.language+".\n");