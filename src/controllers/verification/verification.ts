import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import web3 from '../../web3Provider';

let verifySignature: RequestHandler = async (req, res) => {
  const { address, signature, message } = req.body;

  const recoveredAddress = await web3.eth.personal.ecRecover(message, signature);

  let valid = false;
  if (recoveredAddress === address) {
    valid = true;
  }

  res.send({
    address: address,
    valid: valid,
  });
};

verifySignature = handleErrorMiddleware(verifySignature);

export default verifySignature;
