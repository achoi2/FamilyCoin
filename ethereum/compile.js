const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

//removes build folder
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

//read the sol file from the contracts folder
const familyPath = path.resolve(__dirname, 'contracts', 'Family.sol');

//read the source code from the file
const source = fs.readFileSync(familyPath, 'utf8');

//compile contracts with compiler
const output = solc.compile(source, 1).contracts;

//recreate build folder
fs.ensureDirSync(buildPath);


//loops over the contracts, creates files
for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}
