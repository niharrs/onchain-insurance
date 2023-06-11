const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");

async function main() {
  // Retrieve the contract instance using the contract address
  const contractAddress = "0x210c68419CD16a1116c088A22e30C79D1bf3940b";
  const Insurance = await ethers.getContractFactory("Insurance");
  const insurance = await Insurance.attach(contractAddress);

  const address = "0x144d2c38fe97E819f831744790AAF34f0f06fc87"; // Replace from UI

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

/**
 * RESULT:
 * BigNumber { value: "1320000000000000000" }
 */
