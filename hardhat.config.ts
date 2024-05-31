import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@nomicfoundation/hardhat-ethers';

// Enter your Private Key here
const PRIVATE_KEY = 'f85ee849e34ec14600340d25433e300bed13f8a60b647cc3d4f0fd3bb8c0bcf1'; 

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    localhost: {
      url: 'localhost:8545',
    },
    l1xTestnet: {
      url: 'https://v2-testnet-rpc.l1x.foundation/',
      accounts: [PRIVATE_KEY], 
    },
  },
};

export default config;
