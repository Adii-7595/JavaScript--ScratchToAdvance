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