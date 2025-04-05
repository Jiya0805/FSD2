const EventEmitter = require('events');
var ee = new EventEmitter();
var listener1 = function listen1() {
 console.log("Listener1 executed");
};
var listener2 = function listen2() {
 console.log("Listener2 executed");
};
ee.on("conn",listener1) 
ee.on("conn", listener2);

let count = ee.listenerCount("conn");
console.log("Count 1: " + count );
ee.emit("conn");

ee.removeListener('conn', listener1);
count = ee.listenerCount("conn");
console.log("Counting again: " + count );
ee.emit("conn");

ee.removeAllListeners('conn', listener1);
count = ee.listenerCount("conn");
console.log("Again Count after removing all listeners: " + count );
ee.emit("conn");