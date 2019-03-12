// var Event = require('events').EventEmitter;

// var emp = new Event();

// var count = 0;
// function print() {
//     count++;
//     console.log('Click: ' + count);
// }

// emp.on('click', print);
// emp.once('click', print);
// emp.emit('click');
// emp.emit('click');

var Event = require('events').EventEmitter;

var evt = new Event();

evt.on('event', function () {
    setTimeout(function () {
        console.log('Listener 1');
    }, 0);
})

evt.on('event', function () {
    setTimeout(function () {
        console.log('Listener 2')
    });
})

evt.on('event', function () {
    console.log('Listener 3')
})

evt.emit('event');
