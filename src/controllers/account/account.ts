import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import web3 from '../../web3Provider';

let getBalance: RequestHandler = async (req, res) => {
  const { address } = req.body;

  const balance = await web3.eth.getBalance(address);

  res.send({
    address: address,
    balance: balance,
  });
};

getBalance = handleErrorMiddleware(getBalance);

export default getBalance;
