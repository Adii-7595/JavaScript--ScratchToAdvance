// Dom Events: events are signal that something has occured(user inputs/actions)

// onclick(when an element is clicked)
//onmouseenter(on mouse enter an element)

//Event listeners : addEventListeners
//element.addEventListener(event,callback)

let btns = document.querySelectorAll("button");


// btn.onclick = function(){
//     console.log('button was clicked!')
// }

for  (btn of btns){
    // btn.onclick = sayHello;
    // btn.onclick = sayName;
    // btn.onmouseenter = function (){
    //     console.log("you hovered  button")

    
    // }
    // console.dir(btn);
    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function(){
        console.log('you pressed twice')
    });

}

function sayHello() {
    alert("Hello!");
}
function sayName() {
    alert("Aditya!");
}



