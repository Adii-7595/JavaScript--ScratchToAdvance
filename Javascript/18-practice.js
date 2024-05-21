//for the given string trim it and covert it into uppercase

let str = "help!";
console.log(str.trim().toUpperCase());

// for the string: IloveAdityaVerse predict the output

let str2 = "I love AdityaVerse";
console.log(str2.slice(4,9))
console.log(str2.indexOf("tya"))
console.log(str2.replace("Verse"," Universe"))

//separate the verse part in above string and replace 'e' with 'a'

let newStr = str2.replace("Verse", " Verse");
console.log(newStr.replace("e", "a"));



