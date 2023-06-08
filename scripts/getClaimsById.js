const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");

async function main() {
  // Retrieve the contract instance using the contract address
  const contractAddress = "0x0048858826f97b0908793F914630b1739D5f3422";
  const Insurance = await ethers.getContractFactory("Insurance");
  const insurance = await Insurance.attach(contractAddress);

  const claimNumber = "0"; //Replace with UI

  // Call contract functions
  const getClaimsByIdTxResponse = await insurance.getClaimsById(claimNumber);
  console.log(getClaimsByIdTxResponse);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
