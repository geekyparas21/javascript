let userone={
    email:"abc@gmail.com"
}

let usertwo=userone

usertwo.email="efg@gmail.com";
console.log(userone.email)
console.log(usertwo.email)


let num1=1200
let num2=num1;
num1=300
console.log(num1);
console.log(num2)