var express = require('express');
var app = express();

var courses = [
    {
        id: 1,
        name: 'Javascript'
    },
    {
        id: 2,
        name: 'Angular'
    },
    {
        id: 3,
        name: 'Node.js'
    }
];

app.get('/', function (req, res) {
    res.send('Hello world!')
});

app.get('/api/courses', function (req, res) {
    res.send(courses)
});

app.get('/api/courses/:id', function (req, res) {
    console.log(req.params)
    var course = courses.find(function (course) {
        return course.id === parseInt(req.params.id);
    })
    res.send(course);
});

app.listen(3000, function () {
    console.log('Server on http://localhost:3000')
});
