//DOm : document object model
//the dom represent a document with a logical tree, 
//it allow us to manipulate/change webpage content(HTML element

// selecting Element

// getElementById: returns the element as an obhect or null(if nbot found)


document.getElementById("mainImg")
let img =document.getElementById("mainImg") // its an object of image not the link or element of the image
console.dir(img)


document.getElementById("description")
console.dir(document.getElementById("description"))

// selecting element by class name
// return the elements as an html collection or empty collection(if not found)

document.getElementsByClassName("oldImg")

for(let i; i<oldImg.length;i++){
    console.dir(oldImg[i])
    console.dir(oldImg[i].src)

}

//selecting elemnt by tagname: returnelements as an html collection or empty collection(if not found)
document.getElementsByTagName("p") //paragraph tag either small or capital
document.getElementsByTagName("p")[1].innerText='sbc' //changing the paragraphcontent


//Query Selectors
document.querySelector('p')//select the first p element
document.querySelector('#myId')//select the first element with id name
document.querySelector('.myClass')//select first element with class name
document.querySelectorAll('p')//select the all p element

console.dir(document.querySelector("h2"))
console.dir(document.querySelector("#description"))
console.dir(document.querySelector(".oldImg"))
console.dir(document.querySelectorAll(".smallImg"))

console.dir(document.querySelector("div a")) 


//setting content in object

