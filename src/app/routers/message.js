import { Router } from 'express';
import MessageController from '../controllers/MessageController';

const routes = new Router();

routes.get('/posts', MessageController.index);
routes.get('/posts/filter', MessageController.filter);
routes.get('/posts/:id', MessageController.show);
routes.post('/posts', MessageController.store);
routes.put('/posts/:id', MessageController.update);
routes.delete('/posts/:id', MessageController.delete);

export default routes;
