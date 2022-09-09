require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/SfDFk1cuUHGkR28sTD9El89pPTiRrrrG',
      accounts: ['63f9a9001ac34411a823b2c4496da131455de96df3b523e99498e29b93ba5af1'],
    },
  },
};