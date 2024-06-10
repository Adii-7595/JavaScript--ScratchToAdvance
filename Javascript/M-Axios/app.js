// using axios  library to make http requests


let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";



let btn = document.querySelector("#btn");
btn.addEventListener("click", async ()=> {
    let img = await getImg();
    // console.log(img)

    let photo = document.querySelector("#result");
    photo.setAttribute("src",img);
    console.log(photo)
});

async function getImg(){
    try{
        let res = await axios.get(url2);
        // console.log(res)
        // console.log(res.data)
        // console.log(res.data.message)

        return res.data.message;
    }catch(e){
        console.log(e);
        return "No Image Found"
    }
}
getImg();
 
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", async ()=> {
    let fact = await getfacts();
    console.log(fact)

    let p = document.querySelector("#result1");
    p.innerText = fact;
});

async function getfacts(){
    try{
        let res = await axios.get(url);
        // console.log(res);
        // console.log(res.data);
        // console.log(res.data.fact);

        return res.data.fact;
    }catch(e){
        console.log(e);
        return "No Fact Found"
    }
}
getfacts();



//Axios header
//updating query string

// let aewi = "https://universities.hipolabs.com/search?name=";
// let country = "nepal";
// async function getColleges(){
//     try{
//         let res =await axios.get(aewi+country);
//         console.log(res);
//     }catch(e){
//         console.log(e)
//     }
// }
// getColleges();