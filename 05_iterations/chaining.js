const arr=[1,2,3,4,5]

let changed=arr
               .map((num)=>(num*10))
               .map((num)=>(num-1))
               .filter((num)=>(num>=30))

console.log(changed)