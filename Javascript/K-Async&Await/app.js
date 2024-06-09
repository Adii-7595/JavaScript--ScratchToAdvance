// async and await function 
// async function returns a promise 


// async function greet(){
//     throw "404 Not Found"
//     return "Hello!";
    
// }

// async function reject(){
//     // throw "some random error";
    
//     return "kuchh v";
// }

// greet()
// .then((result)=> {
//     console.log("promise was resolved");
//     console.log("result was:", result)
// })
// .catch((err)=>{
//     console.log("promise was rejected:",err)

// })


//await keyword: pauses the execution of its surrounding async function until the promise is settled

function getNum(){
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve()
       }, 1000);

    });
}
async function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}

//Handling rejections with await
h1 = document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            if (num > 7){
                reject("promise rejcted")
            }
            h1.style.color = color;
            console.log(`color change to ${color}!`);
            resolve("color changed")
        },delay)

    });

  
}

async function aewi(){
    try {

    
    await changeColor("red",1000);
    await changeColor("green",1000);
    await changeColor("yellow",1000);
    await changeColor("blue",1000);
}catch(err){
    console.log("error caught")
    console.log(err)

}
    let a = 10;
    console.log(a+a);
}