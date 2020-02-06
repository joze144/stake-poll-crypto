// eslint-disable-next-line @typescript-eslint/no-var-requires
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.WEB3_PROVIDER || 'PROVIDER'));

export default web3;
