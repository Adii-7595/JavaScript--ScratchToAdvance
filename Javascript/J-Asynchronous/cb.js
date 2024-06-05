//callback nesting - callback hell


h1 =document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color ="red";
// }, 1000);
// setTimeout(() => {
//     h1.style.color ="yellow";
// }, 2000);
// setTimeout(() => {
//     h1.style.color ="green";
// }, 3000);

function changeColor(color,delay,nextColorChange){
    setTimeout(() => {
        h1.style.color =color;
        // nextColorChange();
        if (nextColorChange)nextColorChange();

    }, delay);
}

changeColor("red",1000, ()=>{
    changeColor("green",1000,()=>{
        changeColor("yellow",1000, ()=>{
            changeColor("blue",1000)
        });
    });
});