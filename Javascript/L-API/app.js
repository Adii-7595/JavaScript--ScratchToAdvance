/* API - Application Programming Interface
 */

// Ajax : Asynchromous js and xml

//Http verbs : GET PUT POST DELETE

//status code: 200-OK, 404-NOT FOUND , 400-BAD REQUESTS, 500- INTERNAL SERVER ERROR

//adding infor in URLSs -www.____.com/search?q=anything where q = key and anything = pair

//http headers: header,value


// our first request 

// using fetch: fetch(url)


// let url= "https://catfact.ninja/fact";
// fetch(url)
// .then((respones)=>{
//     console.log(respones)
//     return respones.json()
  
// })
// .then((data)=>{
//     console.log("data1:",data.fact)
//     return fetch(url);

// })
// .then((res)=>{
//     return res.json();

// })
// .then((data)=>{
//     console.log("data2:",data.fact)
// })
// .catch((err)=>{
//     console.log("err")
// })
// console.log("it comes first,though it has been written after calling facts. ")


//async and await-

let urs = "https://catfact.ninja/fact";

async function getfacts(){
    try{

         let res = await fetch(urs);
         let data = await res.json();
        console.log(data.fact);
    }catch(e){
        console.log(e);
    }

}
getfacts();
