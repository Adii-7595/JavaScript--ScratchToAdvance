// const func = (arg1,arg2 ..) => {function definition}
//name less function
const sum = (a,b) =>{
    console.log(a+b); 
}

sum(5,7)

//or

const sum1 = (a,b)=> {console.log(a+b)}
sum1(9,8)

const cube = (n) => {
    return n ** 3;
}
console.log(cube(3))

const pow = (a,b)=> {
    return a ** b
}
console.log(pow(3,3))

const aewi = m =>{
    return m+1
}

console.log(aewi(7))


//implicit return 

// const func = {arg1,arg2}=> {value}

const mul = (a,b)=>(
    a*b

)
console.log(mul(2,3))


//setTime out function 

// setTimeout(function,timeout)

console.log("hi there!");

setTimeout( ()=>{
    console.log("aditya babu");
}, 4000);

console.log("wlcome to this Js world")

//set interval
// setInterval(function1, timeout)

let id = setInterval( ()=>{
    console.log("aditya bruh!")
    
},2000)
console.log(id);

let id1 = setInterval( ()=>{
    console.log("aditya brother!")
    
},4000)
console.log(id1);

clearInterval(id)
clearInterval(id1)


// this and arrow function

// arrow: - this has lexical scope in arrow function
//function : scope-> this -> calling object

const student ={
    name : "raghu",
    marks : 95,
    prop : this,
    getName : function(){
        console.log(this);
        return this.name;
    },
    getMarks : () => {
        console.log(this);//parent's scope
        return this.name;
    },
    getInfo1:function(){
        setTimeout(()=>{
            console.log(this)//student
        },2000)
    },
    getInfo2:function(){
        setTimeout(function (){//window
            console.log(this)
        },2000)
    },
};

//practice question

//write an arror function that returns the square of a number n

const square = (n) =>{
    return n*n
}
console.log(square(9))


//write a function that prints "Hello wirld" 5times at intervals of 2s

let  id2 = setInterval(() => {
    console.log("Hello Baby!")
    console.log("Hello Baby!")
    console.log("Hello Baby!")
    console.log("Hello Baby!")
    console.log("Hello Baby!")
    
},2000);

setTimeout(()=>{
    clearInterval(id2)
    console.log("stopped!")
},10000)