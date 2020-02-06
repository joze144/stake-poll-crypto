import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import web3 from '../../web3Provider';

/**
 * Get address balance and converts it into the integer.
 * Returned number is amount of ETH * 1000, rounded to whole number
 */
let getBalance: RequestHandler = async (req, res) => {
  const { public_address: address } = req.body;

  const balanceWei = await web3.eth.getBalance(address);
  const balance = web3.utils.fromWei(balanceWei, 'milli');
  let balanceInt = parseInt(balance);

  if (balance !== '0' && balanceInt === 0) {
    balanceInt = 1;
  }

  res.send({
    address: address,
    balance: balanceInt,
  });
};

getBalance = handleErrorMiddleware(getBalance);

export default getBalance;
