var EventEmitter = require("event").EventEmitter;
var event = new EventEmitter();
event.on("some_event",function(){

	console.log("some_event 事件触发");


});
setTimeOut(function(){
event.emit(some_event);

},1000);
