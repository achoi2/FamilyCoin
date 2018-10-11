const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const dotenv = require('dotenv');
dotenv.config();
const compiledFactory = require('./build/FamilyFactory.json');

const provider = new HDWalletProvider(
    process.env.MNEMONIC,
    process.env.ACCESSTOKEN,
    1
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: accounts[0], gas: '6500000' });

    console.log('contract deployed to', result.options.address);
};

deploy();
