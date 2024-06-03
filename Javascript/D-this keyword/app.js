//this keyword: it refers to an object  that is executing the current piece of code

const student = {
    name: "Aditya",
    age : 23,
    math : 99,
    english : 99,
    hindi : 100,
    phy: 91,
    getAvg(){
        console.log(this)
        let avg = (this.english +this.math + this.phy)/3;
        console.log(`${this.name}'s marks:`, avg)
    }
}



function getAvg(){
        console.log(this)
        
}
