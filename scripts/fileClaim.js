const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");

async function main() {
  // Retrieve the contract instance using the contract address
  const contractAddress = "0x0048858826f97b0908793F914630b1739D5f3422";
  const Insurance = await ethers.getContractFactory("Insurance");
  const insurance = await Insurance.attach(contractAddress);

  const newAddress = "0x1e281c39668a16ce6fa329906439c8541e110e9f"; // Replace with input from UI
  const transactionHash = "This is a tx hash"; // Replace with input from UI
  const amount = ethers.BigNumber.from(ethers.utils.parseEther("0.2")); // Replace with input from UI
  const comments = "Some comment"; // Replace with input from UI

  // Call contract functions
  const fileClaimTxResponse = await insurance.fileClaim(
    newAddress,
    transactionHash,
    amount,
    comments
  );
  await fileClaimTxResponse.wait(1);
  console.log("Claim filed!");

  const getClaim = await insurance.getClaimsById("0");
  console.log(getClaim);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
