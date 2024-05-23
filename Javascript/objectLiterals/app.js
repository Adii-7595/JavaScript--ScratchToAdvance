//js object literals used to store keyed collections and complex entities

//property => (key,value) pair
// objects are collection of properties

//we store complex value in object rather than array as it has key value pair .

let delhi = {
    lat:"28.7041 N",
    long :"77.1025 E "
};

console.log(delhi)

const student = {
    aditya: 2095,
    sex: "male",
    dob: 23,
    charges: 27
    
};

const item = {
    price : 100.99,
    discount:50,
    colors:["red","pink"]
};

//create an object literal for the properties of thread/twitter post which include:
//username,content,likes,reposts,tags

let Post = {
    username:"Aditya",
    content:"image",
    likes:"1M",
    repost: 100,
    tags: ["@me","@sonal","@bhau"]

}

//Get values
let students = {
    name :"aditya",
    marks : 99.9
}

console.log(students["name"])
console.log(students["marks"])
console.log(students)
console.log(Post.tags)
console.log(Post.repost)
console.log(Post.username)
console.log(Post.content)
console.log(Post.tags[0])


//JS automatically convert objects keys to strings 

const obj = {
    1:"a",
    2:"b",
    true:"c",
    null:'d',
    undefined:"e"
}
console.log(obj[1])
console.log(obj["true"])
console.log(obj["undefined"])
console.log(obj["null"])

//in above ibject literals all the keywords are converted into
//string thus acts normally 




//Add Update Values 
//change delhi to mumbai

const member = {
    name : "Aditya",
    age: 23,
    marks: 99,
    city: "delhi"
};
member.city = "Mumbai";
console.log(member.city)
member.gender = "male"
console.log(member)
member.marks = [1,2,3,4,5,6]
console.log(member.marks)
delete member.marks
console.log(member)


//Nested Object 

const classInfo = {
    aman : {
        grade : "A",
        city : "Delhi"
    },

    aditya : {
        grade: "A",
        city : " Pune"
    },

    raghu : {
        grade : "A",
        city : "Mumbai"
    }
}

console.log(classInfo)

//Array of objects

const stuInfo = [{
    name:"Aditya",
    age:23,
    favno:23,
    mob:123456789,
    city:"Ballia"

},
{
    name:"Abhi",
    age:23,
    favno:23,
    mob:123456789,
    city:"Ballia"

},
{
    name:"Nitin",
    age:23,
    favno:23,
    mob:123456789,
    city:"Ballia"

},
{
    name:"Raghu",
    age:23,
    favno:23,
    mob:123456789,
    city:"Ballia"

},
{
    name:"Aman",
    age:23,
    favno:23,
    mob:123456789,
    city:"Ballia"

},
]
console.log(stuInfo[0])


//math object 
// Math.PI, Math.E : Properties
//methods: Math.abs(n),pow(a,b),floor,ceil,random

//do it by urself

//random integers generation

let num =Math.random();
console.log(num)
console.log(num = num * 10);
console.log(num = Math.floor(num));
console.log(num = num+1);

let random = Math.floor(Math.random()*10) +1;
console.log(random)

//genrate a random number between 1 to 100

let value = Math.floor(Math.random()*100)+1
console.log(value)

//generate a number between 1 to 5
let small = Math.floor(Math.random()*5)+1
console.log(small)

//limited range 10-15

let limit = Math.floor(Math.random()*5)+10;
console.log(limit)




//Guessing Game : user enter a max number and then tries to guess a random generated number between 1 to max
// Guessing Game: User enters a max number and then tries to guess a random generated number between 1 to max

let max = prompt("Enter the max number:");
max = parseInt(max);  // Convert the input to a number
if (!isNaN(max) && max > 0) {
    const randomm = Math.floor(Math.random() * max) + 1;

    let guess = prompt("Guess the number:");
    guess = parseInt(guess);  // Convert the guess to a number

    while (true) {
        if (guess === "quit") {
            console.log("User quit");
            break;
        } else if (guess === randomm) {
            console.log("You are right, congrats! The random number was:", randomm);
            break;
        } else if (guess < randomm) {
            guess = prompt("Your guess was small. Please try again:");
            guess = parseInt(guess);  // Convert the new guess to a number
        } else {
            guess = prompt("Your guess was large. Please try again:");
            guess = parseInt(guess);  // Convert the new guess to a number
        }
    }
} else {
    console.log("Invalid input. Please enter a valid number.");
}

