// Call Stack : 
// call - calling a function / stack- its a data structure which hold function or elements like a pile of books
//stack works on principal of LIFO i.e., Last In First Out

function hello (){
    console.log("inside hello fnx");
    console.log("Hello bro!");

}

function demo(){
    console.log("calling hello fnx")
    hello();
}
console.log("calling demo fnx");
demo();
console.log("done!")


//visualising the call stack

function one(){
    return 1;
}
function two(){
    return one() + one();

}

function three(){
    let ans = two() + one();
    console.log(ans)
}

three();


//Breakpoints: browser helps in tracing generally used in debugging


//JS in single threaded.

setTimeout(function(){
    console.log("lleo bro");
},2000);

console.log("heloooo....")


