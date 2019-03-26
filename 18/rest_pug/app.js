var express = require('express');
var app = express();
var courses = require('./data/courses.json');
var bodyParser = require('body-parser');

app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/../../node_modules/bootstrap/dist'));

app.get('/', function (req, res) {
    res.render('index', { title: 'API' })
});

app.get('/api/courses', function (req, res) {
    res.send(courses)
});

app.post('/api/courses/add', function (req, res) {
    var course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(courses);
})

app.listen(3000, function () {
    console.log('Server on http://localhost:3000')
});

