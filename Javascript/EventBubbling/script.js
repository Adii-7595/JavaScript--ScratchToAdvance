let div = document.querySelector("div")
let ul = document.querySelector("ul")
let lis = document.querySelector("li")


div.addEventListener("click",function(){
    console.log("div was clicked")

});
ul.addEventListener("click",function(e){ // event or e whatever u pass use that as object
    // event.stopPropagation();
    e.stopPropagation();
    console.log("ul was clicked")

});
lis.addEventListener("click",function(e){
    // event.stopPropagation();
    e.stopPropagation();

    console.log("li was clicked")

});