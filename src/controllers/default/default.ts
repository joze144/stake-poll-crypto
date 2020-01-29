import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';

let getDefault: RequestHandler = async (req, res) => {
  res.send({
    api: 'Stake Poll Crypto API',
  });
};

getDefault = handleErrorMiddleware(getDefault);

export default getDefault;
