var a={
    'name':'test',
    'age':20,
    'rpass':true,
    'subject' : {'FSD1':'NAS','FCSP2':'TAT'},
    'maths':[25,23,22],
    'text':null
}
console.log(a)
// functions or undefined or new Date() NOT allowed 

console.log(a.name,a['name'])
console.log(a.age)
console.log(a.subject.FCSP2)
console.log(a.maths[2])

console.log("\nJSON FILE")
const d = require('./json.json')
console.log(d.age)
console.log(d.maths[0])