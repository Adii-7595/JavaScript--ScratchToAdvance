let color = "red"

switch(color){
    case "red":
        console.log("Stop");
        break;
    
    case "yellow":
        console.log("steady");
        break;

    case "green":
        console.log("Go!");
        break;
    
    default:
        console.log("Invalid");
        
}
//use switch statement to print the day of the week using a number variable day with value 1to 7

let value = 1

switch (value){
    case 1:
        console.log("MOnday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday");
        break
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("invalid value");
}