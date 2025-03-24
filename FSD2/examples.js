// Write node JS script to write an array of objects with properties name and age in a file named student.txt. Then read the file and display the object on console.  
// var fs = require("fs")

// var arr = [{'age':12,'name':'v'},{'age':15,'name':'p'}]

// var data = JSON.stringify(arr)
// console.log(data)
// fs.writeFileSync("D:/Kajal/FSD2/student.txt",data)

// var read = fs.readFileSync("D:/Kajal/FSD2/student.txt")
// var d1 = JSON.parse(read)
// console.log(d1)


// Create JSON object which contains array of objects. Calculate perimeter of square and perimeter of circle by using side value and diameter value respectively. Write object as well as perimeter values of square and circle in shape.txt file.
// 
// var shape = 
//     [
//         {
//             name: "circle",
//             diameter: 8
//         },
//         {
//             name: "square",
//             side: 10
//         }
//     ] 

// var d = shape[0].diameter
// var s = shape[1].side
// var p_c = 2*3.14*(d/2)
// var p_s = 4*s
// console.log(p_c,p_s)

// shape[0]['perimeter'] = p_c
// shape[1]['perimeter'] = p_s
// console.log(shape)

// var shape1 = JSON.stringify(shape)
// console.log(shape1)
// var fs = require("fs")
// fs.writeFileSync("D:/Kajal/FSD2/shape.txt",shape1)


// Write node js script and json to perform below tasks. 
// 1.	Write below object in txt file named s2.txt
// {d:{a:10,b:20,c:[30,10]}}
// 2.	Read data from the same file and perform the below tasks.
// a.	addition of a and b.
// b.	subtraction of 2nd element of c and b. (Must be positive value)
// c.	multiplication of elements of c.
// 3.	Add the Output of addition, subtraction and multiplication below the object in s2.txt file.

var data = {d:{a:10,b:20,c:[30,10]}}
var d = JSON.stringify(data)

var fs = require("fs")
fs.writeFileSync("D:/Kajal/FSD2/s2.txt",d)

var d1 = fs.readFileSync("D:/Kajal/FSD2/s2.txt")
d1 = JSON.parse(d1)

var sum = d1['d']['a'] + d1['d']['b']
var sub = Math.abs(d1['d']['c'][1] - d1['d']['b'])
var mul = d1['d']['c'][0] * d1['d']['c'][1]
console.log(sum,sub,mul)

fs.appendFileSync("D:/Kajal/FSD2/s2.txt","\n"+sum+"\n"+sub+"\n"+mul)