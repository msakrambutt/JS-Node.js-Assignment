//Certified web 3.0 & metaverse course Quater # 1 Assignment Javascript-Node
//Excercise Name: Cars
console.log("Output Excercise # 45");

function make_car(manufacturer, model, ...options){
    
    car_desc = {
        'manufacturer': manufacturer,
        'model': model,
        }
      
       for(let i in options){
        car_desc[options]=options[i];  
        
    }
    return car_desc;
    }

my_honda = make_car('honda', 'city', color='Green');
console.log(my_honda);

my_toyota = make_car('toyota', 'corolla', color='blue')
console.log(my_toyota);