// this in addEventListener: when 'this' is used in a callback of event handle of something,it refers to that something
let btn  = document.querySelector("button");
let h1  = document.querySelector("h1");
let h3  = document.querySelector("h3");
let p  = document.querySelector("p");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}


// either do this manually 
// btn.addEventListener("click",function() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";

// });
// h1.addEventListener("click",function() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";

// });
// p.addEventListener("click",function() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";

// });
// h3.addEventListener("click",function() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";

// });

// or do this  

btn.addEventListener("click",changeColor)
h1.addEventListener("click",changeColor)
h3.addEventListener("click",changeColor)
p.addEventListener("click",changeColor)
