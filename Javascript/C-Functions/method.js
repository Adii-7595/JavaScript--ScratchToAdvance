//forEach
// Array.forEach (some definition of function name)

let arr = [1,2,3,4,5]
function print(el){
    console.log(el)
}
arr.forEach(print);

// or

arr.forEach(function(el){
    console.log(el)
})

//or
let arr1 = [1,2,3,4,9]
arr1.forEach((el) => {
    console.log(el);

});

//or

let nums = [ {
    name:"adi",
    marks : 99
},
{
    name:"aditya",
    marks:90
},
{
    name:"raghu",
    marks:98
}]
nums.forEach((student) =>{
    console.log(student.marks)
})

//map:- let newArr = arr.map(some function definition or name)
let num = [9,8,7,6]
let double = num.map((el) =>{
    return el*2
});
console.log(double)


let number = [ {
    name:"adi",
    marks : 99
},
{
    name:"aditya",
    marks:90
},
{
    name:"raghu",
    marks:98
}]
nums.forEach((student) =>{
    console.log(student.marks)
})

let gpa = number.map((el)=>{
    return el.marks/10
})
console.log(gpa)


//filter 
let numss = [2,4,1,5,6,2,7,8,9]
let even = numss.filter ((num) => {
    
    return num % 2 == 0; //even :true
})
    
console.log(even)

//every and Sum
// returns true if every element of array gives true for some function, else return false
// arr.every(some function definition or name );

console.log([1,2,3,4].every((el) => (el % 2)))
console.log([1,2,3,4].some((el) => (el % 2)))

//reduce method: arr.reduce(accumulator,element)

let nu = [1,2,3,4,5,6,7]
let finalVal = nu.reduce((res,el) => {
    return res+el
});
console.log(finalVal);

let arrayy = [1,2,4,6,78,8,9,99,87,4,3,6,7]

let result = arrayy.reduce((max,el) => {
    if (el > max){
        return el;
    }else{
        return max
    }
})

console.log(result)

//practice questions: check if all numbers in our array are multiples of 10 or not

let a = [10,20,30,40,50,60]

let answer = a.every((el) => el%10 == 0);
console.log(answer)



let minimum = arrayy.reduce((min,el) => {
    if (el < min){
        return el;
    }else{
        return min
    }
})
console.log(minimum)