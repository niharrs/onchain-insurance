const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");

async function main() {
  // Retrieve the contract instance using the contract address
  const contractAddress = "0x0048858826f97b0908793F914630b1739D5f3422";
  const Insurance = await ethers.getContractFactory("Insurance");
  const insurance = await Insurance.attach(contractAddress);

  const address = "0x545e3FCFcf6E34C73F881E92eBD1Dd30D5CfB8cA"; //Replace with UI

  // Call contract functions
  const getClaimsByAccountTxResponse = await insurance.getClaimsByAccount(
    address
  );
  console.log(getClaimsByAccountTxResponse);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

/**
 * RESULT:
 *[
  [
    BigNumber { value: "0" },
    '0x545e3FCFcf6E34C73F881E92eBD1Dd30D5CfB8cA',
    '0x1e281c39668A16CE6FA329906439c8541e110E9f',
    'This is a tx hash',
    BigNumber { value: "200000000000000000" },
    'Some comment',
    0,
    claimNumber: BigNumber { value: "0" },
    claimant: '0x545e3FCFcf6E34C73F881E92eBD1Dd30D5CfB8cA',
    newAddress: '0x1e281c39668A16CE6FA329906439c8541e110E9f',
    transactionHash: 'This is a tx hash',
    amount: BigNumber { value: "200000000000000000" },
    comments: 'Some comment',
    status: 0
  ],
  [
    BigNumber { value: "1" },
    '0x545e3FCFcf6E34C73F881E92eBD1Dd30D5CfB8cA',
    '0x1e281c39668A16CE6FA329906439c8541e110E9f',
    'This is a tx hash',
    BigNumber { value: "200000000000000000" },
    'Some comment',
    0,
    claimNumber: BigNumber { value: "1" },
    claimant: '0x545e3FCFcf6E34C73F881E92eBD1Dd30D5CfB8cA',
    newAddress: '0x1e281c39668A16CE6FA329906439c8541e110E9f',
    transactionHash: 'This is a tx hash',
    amount: BigNumber { value: "200000000000000000" },
    comments: 'Some comment',
    status: 0
  ],
  [
    BigNumber { value: "2" },
    '0x545e3FCFcf6E34C73F881E92eBD1Dd30D5CfB8cA',
    '0x1e281c39668A16CE6FA329906439c8541e110E9f',
    'This is a tx hash',
    BigNumber { value: "200000000000000000" },
    'Some comment',
    0,
    claimNumber: BigNumber { value: "2" },
    claimant: '0x545e3FCFcf6E34C73F881E92eBD1Dd30D5CfB8cA',
    newAddress: '0x1e281c39668A16CE6FA329906439c8541e110E9f',
    transactionHash: 'This is a tx hash',
    amount: BigNumber { value: "200000000000000000" },
    comments: 'Some comment',
    status: 0
  ],
  [
    BigNumber { value: "3" },
    '0x545e3FCFcf6E34C73F881E92eBD1Dd30D5CfB8cA',
    '0x1e281c39668A16CE6FA329906439c8541e110E9f',
    'This is a tx hash',
    BigNumber { value: "200000000000000000" },
    'Some comment',
    0,
    claimNumber: BigNumber { value: "3" },
    claimant: '0x545e3FCFcf6E34C73F881E92eBD1Dd30D5CfB8cA',
    newAddress: '0x1e281c39668A16CE6FA329906439c8541e110E9f',
    transactionHash: 'This is a tx hash',
    amount: BigNumber { value: "200000000000000000" },
    comments: 'Some comment',
    status: 0
  ],
  [
    BigNumber { value: "4" },
    '0x545e3FCFcf6E34C73F881E92eBD1Dd30D5CfB8cA',
    '0x1e281c39668A16CE6FA329906439c8541e110E9f',
    'This is a tx hash',
    BigNumber { value: "200000000000000000" },
    'Some comment',
    0,
    claimNumber: BigNumber { value: "4" },
    claimant: '0x545e3FCFcf6E34C73F881E92eBD1Dd30D5CfB8cA',
    newAddress: '0x1e281c39668A16CE6FA329906439c8541e110E9f',
    transactionHash: 'This is a tx hash',
    amount: BigNumber { value: "200000000000000000" },
    comments: 'Some comment',
    status: 0
  ],
  [
    BigNumber { value: "5" },
    '0x545e3FCFcf6E34C73F881E92eBD1Dd30D5CfB8cA',
    '0x6E621167f18E1D368B9DBecA902dfCB4f1c539aB',
    'This is a tx hash',
    BigNumber { value: "200000000000000000" },
    'Some comment',
    0,
    claimNumber: BigNumber { value: "5" },
    claimant: '0x545e3FCFcf6E34C73F881E92eBD1Dd30D5CfB8cA',
    newAddress: '0x6E621167f18E1D368B9DBecA902dfCB4f1c539aB',
    transactionHash: 'This is a tx hash',
    amount: BigNumber { value: "200000000000000000" },
    comments: 'Some comment',
    status: 0
  ],
  [
    BigNumber { value: "6" },
    '0x545e3FCFcf6E34C73F881E92eBD1Dd30D5CfB8cA',
    '0x1e281c39668A16CE6FA329906439c8541e110E9f',
    'This is a tx hash',
    BigNumber { value: "200000000000000000" },
    'Some comment',
    0,
    claimNumber: BigNumber { value: "6" },
    claimant: '0x545e3FCFcf6E34C73F881E92eBD1Dd30D5CfB8cA',
    newAddress: '0x1e281c39668A16CE6FA329906439c8541e110E9f',
    transactionHash: 'This is a tx hash',
    amount: BigNumber { value: "200000000000000000" },
    comments: 'Some comment',
    status: 0
  ]
]
 */
