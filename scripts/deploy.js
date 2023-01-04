const { ethers, run, network } = require("hardhat");
require("dotenv").config();

async function main() {
	const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
	console.log("Deploying contract...");
	const simpleStorage = await SimpleStorageFactory.deploy();
	await simpleStorage.deployed();
	console.log(`Deployed contract to: ${simpleStorage.address}`);
	if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
		await simpleStorage.deployTransaction.wait(6);
		await verify(simpleStorage.address, []);
	}
	const currentValue = await simpleStorage.retrieve();
	console.log(`currentValue: ${currentValue}`);
	//update curr value
	const transactionResponse = await simpleStorage.store(1998);
	await transactionResponse.wait(1);
	const updatedValue = await simpleStorage.retrieve();
	console.log(`updatedValue: ${updatedValue}`);
}
async function verify(contractAddress, args) {
	console.log("Verifying contract ...");
	try {
		await run("verify:verify", {
			address: contractAddress,
			constructorArguments: args,
		});
	} catch (error) {
		if (error.message.toLowerCase().includes("already verified"))
			console.log("already verified");
		else console.log(error);
	}
}
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
