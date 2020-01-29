// eslint-disable-next-line @typescript-eslint/no-var-requires
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider('mainnet.infura.io/v3/e44dd26806914fa78d9601b6c7c215ed'));

export default web3;
