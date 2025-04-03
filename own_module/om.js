// 1
// const add = (a,b)=>{
//     return a+b
// }
// module.exports = add

// 2
// exports.add = (a,b)=>{
//     return a+b
// }
// exports.mul = (a,b)=>{
//     return a*b
// }

// 3
// const add = (a,b)=>{
//     return a+b
// }
// module.exports.a = add

// 4
var n = "lju"
const add = (a,b)=>{
    return a+b
}
const mul = (a,b)=>{
    return a*b
}
module.exports = {add,n,mul}