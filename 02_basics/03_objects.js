const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.name)
console.log(JsUser["full name"])
console.log(JsUser.email)
console.log(JsUser[mySym])

// JsUser.email="abc@gmail.com";
// Object.freeze(JsUser)
// JsUser.email="34r4r@gmail.com"
console.log(JsUser)

JsUser.greet1 = function(){
    console.log("Hello");
}
JsUser.greet2 = function(){
    console.log(`hi ${this["full name"]}`);
}
console.log(JsUser.greet1())
console.log(JsUser.greet2())