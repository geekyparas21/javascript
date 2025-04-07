const user={
    username:"Paras",
    age:19,

    message:function (){
        console.log(`hi ${this.username}`)
    }
}

user.message()
user.username="wdeded"
user.message()

// function chai(){
//     console.log(this);
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this);
// }
// chai()

//above two shows global object

//this shows {}  if it was in browser it shows window
//console.log(this)

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
chai()
// shows {}


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log(addTwo(3,5))


const helper= ()=>({login: "false"})
console.log(helper())