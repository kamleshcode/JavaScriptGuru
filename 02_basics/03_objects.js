// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Kamlesh",
    "full name": "Kamlesh Patel",
    [mySym]: "mykey1",
    age: 18,
    location: "Vapi",
    email: "kamlesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "kamlesh@chatgpt.com"
// Object.freeze(JsUser) ------> after this it cannot be change
JsUser.email = "kamlesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());