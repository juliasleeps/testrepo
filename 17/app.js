var express = require('express');
var bodyParser = require('body-parser')
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

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
    var course = courses.find(function (course) {
        return course.id === parseInt(req.params.id);
    })
    res.send(course);
});

app.post('/api/courses', function (req, res) {
    var course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(courses);
})

app.put('/api/courses/:id', function (req, res) {
    var course = courses.find(function (course) {
        return course.id === parseInt(req.params.id);
    });
    course.name = req.body.name;
    res.send(course);
})

app.delete('/api/courses/:id', function (req, res) {
    courses = courses.filter(function (course) {
        return course.id !== parseInt(req.params.id);
    });
    res.send(courses);
})

app.listen(3000, function () {
    console.log('Server on http://localhost:3000')
});
