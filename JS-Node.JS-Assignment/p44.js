//Certified web 3.0 & metaverse course Quater # 1 Assignment Javascript-Node
//Excercise Name: Cars
console.log("Output Excercise # 45");

function make_car(manufacturer, model,Version){
    
    if(Version != undefined){  
            return{manufacturer, model,color,Version};
        }
            
        return{manufacturer, model,color};

        }
        
console.log(make_car('honda', 'city','white'));
console.log(make_car('toyota', 'corolla', 'blue',{"Version":"1","Size":"5m"}))
