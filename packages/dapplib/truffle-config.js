require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remember common hunt prize surge trend'; 
let testAccounts = [
"0x2f96f010109d1939b9cb63e06a3a0651c051faa0db7af787c39914fbf11cdcfe",
"0x822bf2f00720302d6c399d322abee6f7f6d6dd0c58b2519043c7e0198929d6b7",
"0x9e9789832b73e795e07f88cc91d2f856036ae9e7085fae6dab4c8bdffdd02c7a",
"0x7463d8b1d01a326d1d1541a0c8e98f3a226f9d6cecbb40dd7da62047a283c619",
"0xeb6cb0cd946640303bb93c4a2e8721cad5cef245b90fdfb0cf0bda5bb4438ad7",
"0x9df0bd882afe6fbafc57fb639d9823b4bf396a4af36fbd689fdc52a579e4d245",
"0xfac801115a7beb57ec2e136a5a33283967a32afb49a4cfddb9a11b135f2e983a",
"0x228b7ab51b89adb135a2c4597231ee0f7b850e9662ab8fe9a30256c404981e22",
"0xd7cd3e9440ce142337618c35a74e984b4408be2f7110e8748260f01f05546c43",
"0xcc6cf6deb1c160a4b36ccf1a680b634efcfc1c050115e66cd495647528d4a1cc"
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
            version: '^0.5.11'
        }
    }
};
