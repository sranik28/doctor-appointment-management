import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import { notFount } from './app/middlewares/notFound';
import router from './app/routers';
const app: Application = express();

app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173'] }));


// Application routers
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorHandler);
app.use(notFount);

export default app;
