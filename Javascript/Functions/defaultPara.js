//default parameters: giving a default value to the arguments

function sum(a,b=10){
    return a+b;
}
console.log(sum(20));
console.log(sum(20,90));


//spread:to expand an iterable into multiple values

// function func(...arr){

// }

console.log(..."[1,2,3,4,5,6,7,73,14]")
console.log(..."Aditya")
console.log(..."123456")

let val = [1,2,3,4,5,6]
console.log(Math.min(...val))
console.log(Math.min(val))
console.log(Math.max(...val))


//spread with object literals

let data = {
    email : "ipman@gmail.com",
    password : 123
}

let copy = {...data,id:789};
console.log(copy) //{email: 'ipman@gmail.com', password: 123, id: 789}


let obj = {..."Aditya"}
console.log(obj) //{0: 'A', 1: 'd', 2: 'i', 3: 't', 4: 'y', 5: 'a'}


//REST : allows function to take an indefinite number of arguments and bundle them in an array

function aewi(...args){
    for(let i = 0; i<args.length;i++){
        console.log("you gave us:", args[i])
    }
}
aewi(1,2,3,4,5,6);
//  you gave us: 1
//  you gave us: 2
//  you gave us: 3
//  you gave us: 4
//  you gave us: 5
//  you gave us: 6

//Destructuring :storing values of array into multiple variables


let U = ["adi","sonal","raghu","bail","beta"];
let [winner, runnerUp] = U;
console.log(winner,runnerUp)

let V = {
    name:"bc",
    age : 12,
    class : 3 ,
    sub :["hindi","eng","maths","science"],
    username: "adi@123",
    password : 123

}
let {username,password} = V
console.log(username,password)