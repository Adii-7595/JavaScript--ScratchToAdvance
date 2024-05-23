//splie method : remove/replace/addd elements in place 
// SecurityPolicyViolationEvent(start,deleteCount,item0....itemn)

//it changes in originl array ;



let colors = ["red", "yellow","green","orange","violet","indigo","blue"];
console.log(colors);
console.log(colors.splice(2));
console.log(colors);
console.log(colors.splice(1,3));
console.log(colors);
console.log(colors.splice(1,3,"babyPink","salmonPink","nudePink"));
console.log(colors);


let number=[1,2,3,4,5,6,7,8,10,11,12,14,15,16,17,18,19,20];
console.log(number.splice(1,6,8,9,0,6,5));//it remove the value from 1 to 6 index element and replace the empty spacew 
//with  8,9,0,6,5 
console.log(number);


let cars=["audi","bmw","xuv","maruti"]
cars.splice(3)
console.log(cars)
cars.splice(0,1,"suzuki")
console.log(cars)
cars.splice(0,0,"toyota","thar","baleno")
console.log(cars)
cars.splice(1,0,"mercedes")
console.log(cars)

