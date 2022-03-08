import express from 'express';
import teachers from './api/teachers';
import students from './api/students';

const routes = express.Router();

routes.get('/',(request,response) => {
    response.send('Index Api');
});
routes.use('/students',students);
routes.use('/teachers',teachers);

export default routes;