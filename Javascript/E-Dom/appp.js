
 //Practice questions

 //add the following elements to the container using only js and dom methods

//  i> a <P> with red texts says that "hey i'm red"
//ii> a<h3> with blue text that syas "i'm blue h3"
// iii> a <div> with a black border and pink bcg color with the element inside of it
    //    --- another h1 tag that says i'm in a div
    //   ---- a p tag that says "me too"


let para1 = document.createElement("p");
para1.innerText = "Hey I'm Red!";
document.querySelector('body').append(para1);

para1.classList.add("red");




let h3 = document.createElement("h3");
h3.innerText = "Hey I'm Blue h3!";
document.querySelector('body').append(h3);

h3.classList.add("blue");



let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "Hey I'm in a div!";
para2.innerText = "Me too!";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div)



