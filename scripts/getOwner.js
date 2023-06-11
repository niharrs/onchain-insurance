const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");
const addressContract = require("./contractAddress");

async function main() {
  // Retrieve the contract instance using the contract address
  const contractAddress = addressContract;
  const Insurance = await ethers.getContractFactory("Insurance");
  const insurance = await Insurance.attach(contractAddress);

  // Call contract functions
  const getOwnerTxResponse = await insurance.i_owner();
  console.log(getOwnerTxResponse);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

/**
 * RESULT:
 * 0x545e3FCFcf6E34C73F881E92eBD1Dd30D5CfB8cA
 */
