// functions and function with argument and return keyword is a home work

// scope: 
let sum = 10 //global scope

function calc(a,b){
    let sum = a + b//function scope
    console.log(sum)
}
console.log(calc(5,7));

// Block scope:variable declared inside a {} block cannot be accessed from outside the block
{
    let a= 25;
    const b = 30;
    var c =23
    console.log(a,b);//will execute
}
    console.log(c);//will execute
    // console.log(a,b);//will not execute
    console.log(c);//will not execute as above this line will give an error

//lexical scope: a variable define outside a function can be accessible inside another function defined
// the opposite is not true

function outerFunc(){
    let x = 10;
    let y = 5;
    function innerFunc(){
        console.log(x, y);
    }
    innerFunc();  // Call innerFunc to log the values of x and y
}

outerFunc();  // Call outerFunc to execute the code

//hoisting : use function before function declares

//what will be the output of the following code
let greet = " hello";

function changeGreet(){
    let greet = "namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
}
console.log(greet);
changeGreet();

//function expression

// const variable = function(args1,args,2){

// }

const summ = function(a,b){
    return a+b
}
console.log(summ(1,1));


//higher order functions: takes one or multiple function as argument
//return a function

function multipleGreet(func,n){
    for (let i=1; i<=n; i++){
        func();
    }
}
let greetings = function(){
    console.log("hello")
}
multipleGreet(greetings,3)

//Methods : actions that can be performed on an object

const calculator = {
    add : function(a,b){
        return a+b
    },
    sub: function(a,b){
        return a-b
    },
    mul : function(a,b){
        return a*b
    },
    div(a,b){
        return a/b
    }
}

console.log(calculator.add(1,2))
console.log(calculator.sub(2,1))
console.log(calculator.mul(1,2))
console.log(calculator.div(1,2))