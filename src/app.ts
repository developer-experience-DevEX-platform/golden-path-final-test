import express from 'express';

import { healthRouter } from './routes/health.js';

export const createApp = () => {
  const app = express();

  // Avoid exposing framework implementation details in HTTP responses.
  app.disable('x-powered-by');
  app.use(express.json());
  app.use('/health', healthRouter);

  return app;
};
