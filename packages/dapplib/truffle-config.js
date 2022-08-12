require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift rescue noise hockey hunt beach blue series'; 
let testAccounts = [
"0xb1c2f12cc36cf11f7b6930b9bc89b1d92cc77f3fa0e2195db14905ec93124d56",
"0x1dc8066e519c64b515799bb220c2b5f595dcc7e56fe8c80711e9abb6b59604ea",
"0xf98582f4c5e4cadea55d9d43d3233a60500c0657ea87f5361417c312905ae064",
"0xd9e0c145f4d3ba25fa13a6eab0eb93fd15e8bbca17c5eed8ab0678fd2a2f1343",
"0x7c3c3654a344caa801b00ab427e5a0eb82628a9da1e53f870bf2dc6643a194ed",
"0x56e2535a21ce4fcfd33b76275abfe4f3048c891a674e095dd798f5e8f444f575",
"0x07db688ac0d4142a68e893389211c3e571b37661780f0c6992e7c700da2b0d46",
"0x5ca44b48e9820ea8e9bbc8002fbd0d6a56ad30e89f363e0cf4768bf2832a7b40",
"0xf1d595a48ce2845ecd21f11348b096b5e36fe5b9cd734eb0608dbfdb084e0b99",
"0x8135cb20428e60c7d48323a849f0f214fe2b9c3c973227561e27e8dc29420e07"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

