import express from 'express';

const teachers = express.Router();

teachers.get('/',(request,response) => {
    response.send('Index Api Teachers');
});

export default teachers;