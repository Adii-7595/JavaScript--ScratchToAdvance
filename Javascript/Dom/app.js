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


//InnerText:shows the visible text content in a node
//textContent : shows full text
//innerHTML: show the full markup


//setting content in object

let para = document.querySelector('p')

p.innerHTML = <u>${heading.innerText}</u>


//manipulating attributes 
obj.getAttribute(attr)
obj.setAttribute(attr,val)

//style property
// obj.style

//classList:obj.classList

classList.add() //to add new class
classList.remove()//to remove class
classList.Contains()//to check if class exists
classList.toggle()// to toggle between add and remove

//navigation on page
// parentElement 
// chilElement
// previousElelmentSibling / nextElementSibling

//adding element 
document.createElement('p')
appendChild(element)
append(element)
prepend(element)
insertAdjacent(where,element)

p.insertAdjacentElement('beforebegin', element)
p.insertAdjacentElement('beforeend', element)
p.insertAdjacentElement('afterbegin', element)
p.insertAdjacentElement('afterend', element)


//removeElement
// removeChild
// remove(element)

obj.removeChild(element)
obj.remove(element)



 //Practice questions

 //add the following elements to the container using only js and dom methods

//  i> a <P> with red texts says that "hey i'm red"
//ii> a<h3> with blue text that syas "i'm blue h3"
// iii> a <div> with a black border and pink bcg color with the element inside of it
    //    --- another h1 tag that says i'm in a div
    //   ---- a p tag that says "me too"



