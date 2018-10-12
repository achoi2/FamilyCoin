import web3 from './web3';
import FamilyFactory from './build/FamilyFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(FamilyFactory.interface),
    '0xe21db5b2f2090750e182f8ee254f4bcf43ff508c'
);

export default instance;