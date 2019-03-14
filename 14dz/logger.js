var Event = require('events').EventEmitter;

var evt = new Event();

evt.on('login', function(){
    var curDate = new Date(); 
    console.log('User logged in at', curDate);
});

evt.on('doSomeAction', function(){
    var curDate = new Date(); 
    console.log('User is doing something...');
});

evt.on('logout', function(){
    var curDate = new Date(); 
    console.log('User logged out at', curDate);
});

evt.emit('login');
evt.emit('doSomeAction');

setTimeout(function(){
    evt.emit('logout');
}, 3000)
