// var obj1 = {
//     name: 'Yuka',
//     id: 1,
//     foo: function () { console.log(this.name) }
// };

// var dataJson = JSON.stringify(obj1);

// console.log(obj1);
// console.log(dataJson);

var strJson = '{"id": 1, "name": "yuka"}';
var data = JSON.parse(strJson);
console.log(data);

data.code = 'code1';
console.log(data);
var newStrJson = JSON.stringify(data);
console.log(newStrJson);

// node Phantom
// AJAX запроcы get

