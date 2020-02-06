import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import web3 from '../../web3Provider';

let verifySignature: RequestHandler = async (req, res) => {
  const { public_address: address, signature, message } = req.body;

  const checksumAddress = web3.utils.toChecksumAddress(address);
  const recoveredAddress = await web3.eth.accounts.recover(message, signature);

  let valid = false;
  if (recoveredAddress === checksumAddress) {
    valid = true;
  }

  res.send({
    address: address,
    valid: valid,
  });
};

verifySignature = handleErrorMiddleware(verifySignature);

export default verifySignature;
