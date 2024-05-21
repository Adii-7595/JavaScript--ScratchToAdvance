//method : action that can be performed on object
//format : stringName.method()


//trim method: trim whitespace from both ends of strings and returns a new one- no whitespace will be remove from in between strings

let msg= "  ads  ";
console.log(msg.trim());
//trim create a new string with unavailable whitespace.
//thats why string in JS  is immutable

//toUpperCase(), toLowerCase()

let a = "adiTYa"
let a1 = a.toUpperCase()
let a2 = a.toLowerCase()

console.log(a1,"\n"+a2)

//string method with arguments

//Argument is a some value that we pass to the method
//indexOf return the first occurence index of any given string or alphabet

console.log(a.indexOf("i"))
console.log(a.indexOf("adi"))
console.log(a.indexOf("TYa"))

//