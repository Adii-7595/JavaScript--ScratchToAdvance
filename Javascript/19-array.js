//Array : Linear collection of things or object or collection of elements 
//it's store in contiguous manner in memory

let student = ["adi","sonal","raghu","abhi","mg"];
console.log(student[2]);
console.log(student);
console.log(student.length);

let nums =   [2,4,6,8] //| 2 | 4  | 6  | 8 |
console.log(nums[9])
console.log(nums.length)
//type of array in js is object
console.log(typeof(nums))

//different way to initialize array
let marks = [ 12,1,3,15,67,86]
let names = ["adi","aman","sumit","kalki","aewi","kuchh v"]

let emptyArr = []
console.log(emptyArr)
console.log(emptyArr.length)
console.log([].length)//its a new empty arrays

//mixed array like list of python in js .

let info = ["aditya",23,2001,0.4]
console.log(info[0])
console.log(info[0][4]) // character accessing of first index element of the array
console.log(info[0].length)

//Arrays are Mutable:

let fruits = ["mango", "apple", "litchi"]
fruits[0]="banana"
console.log(fruits[0])
console.log(fruits)

//in space place will be counted as empty element if we assign a greater value index with any element .

fruits[10] = "kiwi"
console.log(fruits.length)
console.log(fruits)
console.log(fruits[7])

//Array Methods: 
//Push-ass to end , pop-deletem from end and return it,
//unshift-add to start, shift-delete from start and returns it

let arr = ["audi",'BMW','THAR','Maruti']
console.log(arr.push("volvo"))
console.log(arr)
console.log(arr.pop())
console.log(arr)
console.log(arr.unshift("Ferrari"))
console.log(arr)
console.log(arr.shift())
console.log(arr)

//Prcatice questions 
//for the given start state of an array.change it to final form using methods

let start = ['january','february','march','april','may']
//let final = ['february','june','march','april','may']

start.shift()
start[1]='june'
console.log(start)

//array references
//address in memory

console.log([]==[]) //false
console.log([1]==[1]) // false
let arrr=[1]
let arrr2=[1]
// reference variable arrr and arrr2 have different memory location thus the memory
// address cant be same it reutrns false
console.log(arrr==arrr2) 

arrr1=arrr
console.log(arrr1==arrr)

/* here we r assigning the same address to the other  reference variable thus it points 
the same element of the array which result in true*/

let numba=[1,2,3,4,5]
let lumba=numba

console.log(numba==lumba)
console.log(numba,"\n",lumba)
lumba.pop()
console.log(numba,"\n",lumba)
console.log(numba==lumba)


//Array Methods : indexof- return index of something if found else rreturn -1
let cars = ["audi",'BMW','THAR','Maruti']
console.log(cars.indexOf("audi"))

//includesOf : search for a value if found return true else return false i.e., it return in booleans

console.log(cars.includes("ferrari"))
console.log(cars.includes("BMW"))

//Array method Concat: merge 2 arrays

let first = [1,4,7,9]
let second = [0,8,6,3]
console.log(first.concat(second))//it doesn't change our primary element respect to every array declared
//it returns new arr

//reverse method : it reverse the order of element from 1 to n - to - n to 1

console.log(first.reverse())//it changes the original array i.e inplace reversal

//slice method works as string slice and return the copy of the array as per given argument in method
// and doesn't change the og array.

// syntax : name.slice()- return copy of og array
//name.slice(first)
//name.slice(first,end)
//name.slice(-num)= name.slice(name.length-num)

console.log(cars.slice())
console.log(cars.slice(2))
console.log(cars.slice(1,3))
console.log(cars.slice(1,8))//it doesn't give an error as index out of limit
console.log(cars.slice(-2))
console.log(cars.slice(9))//it returns []


