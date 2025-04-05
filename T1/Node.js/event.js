// var eventemitter = require('events')
// var ee = new eventemitter()

// ee.on("start",()=>{
//         console.log("Event Started.")
//     }
// )

// ee.addListener("end",()=>{
//         console.log("Event has Ended.")
//         ee.emit("start")
//     }
// )

// ee.emit("start")
// ee.emit("end")
// console.log("Completed")

var ee = require('events')
var e = new ee()

const fun1 = (m)=>{
    console.log("fun1 : "+m)
}
const fun2 = (m)=>{
    console.log("fun2 : "+m)
}

e.on("e1",fun1)
e.on("e2",fun2)
e.on("e1",fun1)
e.on("e2",fun2)

e.removeListener('e1',fun1)
e.removeAllListeners('e2')

e.emit("e1","J") //fun1 : J
e.emit("e2","JI") // no output : no listeners