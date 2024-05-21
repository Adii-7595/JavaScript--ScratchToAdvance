// &&-> And,  ||-> Or,  ! -> Not

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(!(true && true));
console.log(true && !false);
console.log(false || !true);
console.log(false ||!false);

// Ques:- A 'Good string' is a string that starts with letter a & has a length > 3.Write Program to find a string is good or not

let str= 'Adi'

if (str[0]=='a' && length(str) >= 3){
    console.log("Good String");
}
else{
    console.log("Not a Good string!")
}

//Predict the output

let num = 12;

if (( num%3 ===0) && ((num+1==15)||(num-1==11))){
    console.log("Safe")
}else{
    console.log("Not Safe")
}