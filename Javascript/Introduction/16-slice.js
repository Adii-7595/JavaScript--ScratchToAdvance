/*slice method 
returns a part of the original string as a new string
str.slice(start), str.slice(start,end) ,str.slice(-end)
last index in slice method is non inclusive thus we need to give  the end value +1 for the accessibility of that index*/

let str = "lovecoding"
console.log(str.slice(0))
console.log(str.slice(0,9))
console.log(str.slice(0,10))
console.log(str.slice(1))
console.log(str.slice(-5))