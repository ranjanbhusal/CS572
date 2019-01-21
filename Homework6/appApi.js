const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator/check');
const app = express();
const morgan = require('morgan')
const cors = require('cors')
const fs = require('fs');
const path = require('path');

let grades = [{ id: 1, name: 'Assad Saad', course: 'CS572', grade: 95 },
{ id: 2, name: 'Ranjan Bhusal', course: 'CS472', grade: 85 }];
let index = 2;

//Setup
const logger = morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
})
app.use(logger)
app.use(cors())
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.header('Content-Type', 'application/json')
    next()
})


//get list of grades
app.get('/', function (req, res, next) {
    res.json(grades);
});

//add new grade
app.post('/create', [
    check('name', 'name must be entered').exists(),
    check('course', 'course must be entered').exists(),
    check('grade', 'grade must be entered').exists(),
    check('grade', 'grade must be number').isNumeric()
    ],function (req, res, next) {
    console.log(req.body);
    errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    const newGrade = {
        id: ++index,
        name: req.body.name,
        course: req.body.course,
        grade: req.body.grade
    };

    grades.push(newGrade);
    res.status(201).json(newGrade);
    //res.status(201).json(grades);
});

//Update grade
app.put('/update/:id', [
    check('name', 'name must be entered').exists(),
    check('course', 'course must be entered').exists(),
    check('grade', 'grade must be entered').exists(),
    check('grade', 'grade must be number').isNumeric()
    ],function (req, res, next) {
        console.log(req.body);
        errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const updateGrade = grades.find(grade => grade.id == req.params.id);
        const indexOfGrade = grades.indexOf(updateGrade);
        console.log(indexOfGrade);
        grades[indexOfGrade] = req.body;

        res.status(202).json(grades);
    //res.status(201).json(grades);
    });

//delete grade
app.delete('/delete/:id', function (req, res, next) {
        console.log(req.body);
        errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const existingGrade = grades.find(grade => grade.id == req.params.id);
        const indexOfGrade = grades.indexOf(existingGrade);
        console.log(indexOfGrade);
        const newGrades = grades.filter(grade => grade.id != req.params.id);
        grades = newGrades;
        res.status(200).json(grades);
    //res.status(201).json(grades);
    });


app.listen(3000, () => console.log('listening in 3000'));