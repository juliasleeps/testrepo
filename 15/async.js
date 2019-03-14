// 1. callback
// 2. promise
// 3. async / await

function coffeeMachine(coffeeName, callback) {
    setTimeout(function () {
        console.log('Your ' + coffeeName + ' is done')
        setTimeout(function () {
            var milk = ' with banana milk';
            return callback('Your ' + coffeeName + ' is done' + milk);
        }, 1000)
    }, 1000)
}

coffeeMachine('Jacobs', function (data) {
    console.log(data);
});
