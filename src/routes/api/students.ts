import express from 'express';

const students = express.Router();

students.get('/',(request,response) => {
    response.send('Index Api Students');
});

export default students;