//object literals
const mySym =Symbol("key1")
const jsUser = {
    name:"kunal",
    age: 18,
    location:"Agra",
    Email:"kunalvardhan709@gmail.com",
    [mySym]:"mykey1",
    lastloginday:["monday","saturday"]
}
console.log(jsUser.Email)
console.log(jsUser["Email"]);
console.log(jsUser[mySym]);
 
jsUser.Email="hitesh@chatgpt.com"

jsUser.Email="hitesh@google.com"

console.log(jsUser)

jsUser.greeting =function(){
    console.log("Hello Js User");
    
}
console.log(jsUser.greeting());


jsUser.greeting2 =function(){
    console.log(`Hello JS User,${this.location}`);
}
console.log(jsUser.greeting2());