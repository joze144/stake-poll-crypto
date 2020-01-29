import dotenv from 'dotenv';
const result = dotenv.config();
if (result.error) {
  dotenv.config({ path: '.env.default' });
}

import app from './app';
import logger from './logger';

app.listen(app.get('port'), (): void => {
  logger.info(`*\t🌏 Express server started at http://localhost:${app.get('port')}\t\t*`);
});
