var Event = require('events').EventEmitter;

var emp = new Event();

var count = 0;
var print = function () {
    count++;
    console.log('Click: ' + count);
}

emp.on('click', print);
emp.emit('click');
