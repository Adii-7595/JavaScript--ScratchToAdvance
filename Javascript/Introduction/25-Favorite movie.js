const favourite = "Border"
let guess = prompt("Guess my favrt movie! ");

while ((guess != favourite) &&( guess != "quit" )){
    guess = prompt("please try again ");


}
if(guess == favourite){
    console.log("congrats u got it!")
}