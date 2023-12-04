import 'module-alias/register';
import dotnet from 'dotenv';
dotnet.config();
import express from 'express';
import config from 'config';
import { Logger } from './lib/logger';
import { connectToDatabase } from './lib/connect';
import router from './routes';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './swaggerOptions';
const app = express();
const port = config.get('port');

const specs = swaggerJsDoc(swaggerOptions);

router.use('/docs', swaggerUi.serve);
router.get('/docs', swaggerUi.setup(specs, { explorer: true }));

app.use(router);

app.listen(port, () => {
  Logger.info(`localhost listening on ${port}`);
  connectToDatabase();
});
