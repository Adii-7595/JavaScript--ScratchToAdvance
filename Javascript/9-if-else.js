//grading system

let marks =90;

if (marks >= 80){
    console.log("A+");
}
else if (marks >= 70){
    console.log("A");
}
else if (marks >= 60){
    console.log("B+");
}
else if (marks >= 33){
    console.log("B");
}
else if(marks< 33){
    console.log("F");
}
else{
    console.log("Invalid entry")
}
 // vote check
let a=20;

if (a>=18){
    console.log('You are eligible to drive');
}
if (a<=18){
    console.log("You can't")
}
else{
    console.log("INvallid entry")
}


//traffic light question

let color= 'Yellow'

if (color==='Green'){
    console.log('time to go!')
}
if (color==='Red'){
    console.log('STOP!')
}
if (color==='Yellow'){
    console.log('Be steady!')
}
else{
    console.log("Invalid")
}

//calculate popcorn prices

let size='XL'

if (size ==='XL'){
    console.log("Price: Rs 250")
}
else if (size === 'L'){
    console.log("Price: Rs 200")
}
else if (size ==='M'){
    console.log("Price: Rs 100")
}
else if (size ==='S'){
    console.log("Price: Rs 50")
}
else{
    console.log("Not Available")
}