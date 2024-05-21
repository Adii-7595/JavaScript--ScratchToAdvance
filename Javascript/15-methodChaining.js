let msg = "hello";
let newMsg = msg.trim()
console.log("after trim:",newMsg)
console.log("before chaining:", newMsg.toUpperCase())

//message chaining

console.log("after chaining:", msg.trim().toUpperCase())
