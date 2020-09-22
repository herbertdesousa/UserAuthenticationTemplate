import { Router } from 'express';

import SessionsControllers from '../controllers/SessionsControlller';

const sessionsRoutes = Router();
const sessionsControllers = new SessionsControllers();

sessionsRoutes.post('/', sessionsControllers.create);

export default sessionsRoutes;
