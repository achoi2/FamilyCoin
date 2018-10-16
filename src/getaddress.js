import web3 from './web3';
import Family from './Family.json';


export default (address) => {
    return new web3.eth.Contract(
        JSON.parse(Family.interface),
        address
    );
};
