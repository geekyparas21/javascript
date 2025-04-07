const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const map=new Map()
map.set("IN","INDIA")
map.set("US","UNITED STATES")
map.set("AUS","AUSTRALIA")
map.set("NZ","NEW ZEALAND")

for (const iterator of map) {
    console.log(iterator)          /// print whole map in an array format
}

for (const [key,val] of map) {
    console.log(key,' ->> ',val)
}

const obj={
    name : "abcd",
    age: 12
}

for (const key of obj) {
    console.log(key)           // cannot use for_of loop in object
}