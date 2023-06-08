const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");

async function main() {
  // Retrieve the contract instance using the contract address
  const contractAddress = "0x0048858826f97b0908793F914630b1739D5f3422";
  const Insurance = await ethers.getContractFactory("Insurance");
  const insurance = await Insurance.attach(contractAddress);

  const address = "0x545e3FCFcf6E34C73F881E92eBD1Dd30D5CfB8cA"; // Replace from UI

  // Call contract functions
  const getPremiumByAddressTxResponse = await insurance.addressToPremium(
    address
  );
  console.log(getPremiumByAddressTxResponse);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
