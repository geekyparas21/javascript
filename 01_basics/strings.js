const name = "paras"
const repoCount = 50

// console.log(name + repoCount + " Value"); 

console.log(`My name is ${name}`);     // have to use ` sdefewfe ${} `

// console.log(name.length)
// console.log(name.indexOf('z'))   // not present gives -1
// console.log(name.indexOf('h'))
// console.log(name.substring(2,4))     //(st index,lastidx)  lastidx not printed

const s= name.slice(0,1)         //(start,end)  end is exclude  and if neg idx means that char from last 
console.log(s);

const t="    abc s errgr    "     // removes spaces from start nad end
console.log(t.trim())

console.log(name.replace('a','1'))    // replace first occurance only
console.log(name.includes('z'))
console.log(name.split('a'))