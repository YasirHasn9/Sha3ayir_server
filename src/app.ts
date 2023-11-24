import 'module-alias/register';
import dotnet from 'dotenv';
dotnet.config();
import express from 'express';
import config from 'config';
import { Logger } from './lib/logger';
import { connectToDatabase } from './lib/connect';
import router from './routes';
const app = express();
const port = config.get('port');

app.use(router);

app.listen(port, () => {
  Logger.info(`localhost listening on ${port}`);
  connectToDatabase();
});
