//sort method: element sorted in sascending or descending order

let days=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
console.log(days.sort())

let nums = [90,89,67,42,100]
console.log(nums.sort())
//sort method converts the element of the array in string format and then sort the element with that code basis
//that's why it will not result a proper ascending orser sorting for numbers 


//Practice questions
//for the given start of an array, change it to final form using splice
let start = ["january","july","march","august"]

//[july ,june ,march,august]

start.splice(0,2,"july","june")
console.log(start)


//return the index of javascript if it was reversed
let tech = ['c','c++','html','javascript','python','java','c#','sql']
console.log(tech.reverse().indexOf('javascript'))
