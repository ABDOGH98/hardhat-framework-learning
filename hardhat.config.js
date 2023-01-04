require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("./tasks/block-number");

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
	defaultNetwork: "hardhat",
	networks: {
		goerli: {
			url: GOERLI_RPC_URL,
			accounts: [PRIVATE_KEY],
			chanId: 5,
		},
	},
	solidity: "0.8.17",
	etherscan: {
		apiKey: ETHERSCAN_API_KEY,
	},
};