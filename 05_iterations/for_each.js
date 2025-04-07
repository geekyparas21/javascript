const arr=[1,2,3,4,5]

arr.forEach( function(item,idx,arr){
    console.log(item,idx,arr)
} )

arr.forEach((item)=>{
    console.log(item)
})

function print(item){
    console.log(item)
}
arr.forEach(print)

const myarr=[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myarr.forEach((obj)=>{
    console.log(obj.languageName);
})