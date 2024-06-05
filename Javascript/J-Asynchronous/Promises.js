// function savetoDb(data, success, failure){
//     let intspd = Math.floor(Math.random()*10)+1;

//     if (intspd > 4){
//         success();
//     }else{
//         failure();
//     }

// };
// savetoDb(
//     "Aditya",
//     ()=>{
//         console.log("your data was saved");
//         savetoDb(
//             "hello",
//             ()=>{
//                 console.log("save2");
//                 savetoDb(
//                     "callbackHell",
//                     ()=>{
//                         console.log("save3");
//                     },
//                     ()=>{
//                         console.log("failure 3")
//                     }
//             );
//             },
//             ()=>{
//                 console.log("failure2")
//             }
//         );
//     }, 

//     ()=>{
//     console.log("failure 1")
//     }
// );


/*Promises: the promises object represents the eventual
completion(or failure) of an asynchronous operatin and its resulting value.
it either resolve or reject---ASYNCHRONOUS FUNCTION AS IT IS HIGHLY DEPENDABLE ON VARIOUS FACTORS*/


function savetoDb(data) {

    return new Promise((resolve, reject) => {
        let intspd = Math.floor(Math.random() * 10) + 1;
        if (intspd > 4) {
            resolve("Successfulyy saved");
        } else {
            reject("Failed");
        }



    });
};

// savetoDb("Aditya bruh")

//then() and catch() method in promises


// let request = savePromise("aditya");
// request
//     .then(()=>{
//         console.log("prommise resolved");
//     })
//     .catch(()=>{
//         console.log("promise rejected")
//     });


//Promise chaining:- improved version , its nested then and catch
//Results and errors

savetoDb("apna time bhad me gaya!")
    .then((res) => {
        console.log("save1: Promise resolved");
        console.log("result of promise:",res);
        return savetoDb("hello");
    })
    .then((res) => {
        console.log("save2: Promise resolved");
        return savetoDb("hii");
    })
    .then((res) => {
        console.log("save3: Promises resolved")
    })
    .catch((error) => {
        console.log("fail1: Promise rejected");
        console.log("result of promise:",error);
        console.log(error)

    });





