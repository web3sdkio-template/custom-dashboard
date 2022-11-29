# Custom Dashboard

This example demonstrates the web3sdkio SDK's capability to deploy any of our [pre-built smart contracts](https://portal.web3sdk.io/pre-built-contracts)!

We use the [`ContractDeployer class`](https://portal.web3sdk.io/typescript/sdk.contractdeployer) and the `deployBuiltInContract` function to deploy the contracts, and use the `sdk.getContractList` to view all the contracts we deployed so far!

This example can be utilized in projects that you want users to deploy smart contracts via your application dynamically, rather than the web3sdkio dashboard.

## Tools

- [**web3sdkio TypeScript SDK**](https://portal.web3sdk.io/typescript/): to access the [ContractDeployer class](https://portal.web3sdk.io/typescript/sdk.contractdeployer) and view the deployed contracts.

- [**web3sdkio React SDK**](https://portal.web3sdk.io/react/): to allow users to connect their wallet to the website using the [useMetamask](https://portal.web3sdk.io/react/react.usemetamask) hook, and view their wallet information using [useAddress](https://portal.web3sdk.io/react/react.useaddress).

## Using This Repo

- Create a project using this example by running:

```bash
npx web3sdkio create --template custom-dashboard
```

## Guide

We'll explore the details of how this repository works below.

### Viewing Deployed Contracts

On the [index.tsx](./pages/index.tsx) page, we use the [`.getContractList`](https://portal.web3sdk.io/typescript/sdk.web3sdkiosdk.getcontractlist#web3sdkiosdkgetcontractlist-method) function to view all the contracts we deployed so far:

```jsx
// Get the signer of the currently connected wallet
const signer = useSigner();

// Instantiate the SDK with the signer
const web3sdkio = new Web3sdkioSDK(signer);

// Fetch the contracts for this address and set them in state using the SDK
web3sdkio.getContractList(address).then((contracts) => {
  // set the contracts in state
  setExistingContracts(contracts);
});
```

### Deploying Contracts

On the [deploy.tsx](./pages/deploy.tsx) page, we use the [`.deployBuiltInContract`] function to deploy a contract, which is a generic function to deploy _any_ pre-built contract.

Typically, you know which contract you want your users to deploy, so it's more helpful to use one of the methods exposed on the [ContractDeployer class](https://portal.web3sdk.io/typescript/sdk.contractdeployer#contractdeployer-class).

Such as:

- [deployNFTDrop](https://portal.web3sdk.io/typescript/sdk.contractdeployer.deploynftdrop)
- [deployToken](https://portal.web3sdk.io/typescript/sdk.contractdeployer.deploytoken)
- [deployMarketplace](https://portal.web3sdk.io/typescript/sdk.contractdeployer.deploymarketplace)

On each of these pages, you can find code examples to help you deploy the contract.

To make the code generic for this example project, we used the `internal` function from the SDK `deployBuiltInContract`, which calls each of these functions under the hood, depending on which contract you pass in as a parameter.

Here's how it looks:

```jsx
const signer = useSigner();

const web3sdkio = new Web3sdkioSDK(signer);

const contractAddress = await web3sdkio.deployer.deployBuiltInContract(
  contractSelected,
  {
    name: `My ${contractSelected}`,
    primary_sale_recipient: address,
    voting_token_address: address,
    description: `My awesome ${contractSelected} contract`,
    // Recipients are required when trying to deploy a split contract
    recipients: [
      {
        address,
        sharesBps: 100 * 100,
      },
    ],
  }
);
```

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/web3sdkio](https://discord.gg/web3sdkio).
