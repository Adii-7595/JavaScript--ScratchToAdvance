let btn = document.querySelector("button")
let ul = document.querySelector("ul")
let inp = document.querySelector("input")


btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    // console.log("clicked!")
    // console.log(inp.value)

    let delBtn = document.createElement("button")
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete")

    item.appendChild(delBtn)
    ul.appendChild(item);
    inp.value = "";
   

});

// let delBtns = document.querySelectorAll(".delete");

// for (delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         // console.log("element deleted!")
//         let par = this.parentElement;
//         console.log(par)
//         par.remove();

// });

// }

//Event Delegation:- 

ul.addEventListener("click", function(e) {
    if (e.target.nodeName == "BUTTON"){
        let listItem =e.target.parentElement;
        listItem.remove();
    }
});

