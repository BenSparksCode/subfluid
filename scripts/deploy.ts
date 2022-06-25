import hre, { ethers } from "hardhat";
import "@nomiclabs/hardhat-etherscan";
import chalk from "chalk";
import fs from "fs";
import { Contract } from "ethers";
import ProgressBar from "progress";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

interface DeploymentObject {
  name: string;
  address: string;
  args: any;
}

let deployDetails: DeploymentObject[] = [];

async function main() {
  const [deployer] = await ethers.getSigners();
  const network = await setNetwork(deployer);

  // TODO add contract deployments here
  // const token = await deploy("MockERC20");

  // verification
  if(verifiableNetwork.includes(network)) await verify()

  // todos: add table
}

const setNetwork = async (deployer: SignerWithAddress) => {
  const network = process.env.HARDHAT_NETWORK === undefined ? "localhost" : process.env.HARDHAT_NETWORK;
  
  // tslint:disable-next-line: no-console
  console.log("🚀 Deploying to", chalk.magenta(network), "!");
  
  // tslint:disable-next-line: no-console
  console.log(
    chalk.cyan("deploying contracts with the account:"),
    chalk.green(deployer.address)
  );

  // tslint:disable-next-line: no-console
  console.log("Account balance:", (await deployer.getBalance()).toString());

  return network
}

// custom `deploy` in order to make verifying easier
const deploy = async (contractName: string, _args: any[] = [], overrides = {}, libraries = {}) => {
  console.log(` 🛰  Deploying: ${contractName}`);

  const contractArgs: any = _args || [];
  const stringifiedArgs = JSON.stringify(contractArgs);
  const contractArtifacts = await ethers.getContractFactory(contractName,{libraries: libraries});
  const contract = await contractArtifacts.deploy(...contractArgs, overrides);
  const contractAddress = contract.address;
  fs.writeFileSync(`artifacts/${contractName}.address`, contractAddress);
  fs.writeFileSync(`artifacts/${contractName}.args`, stringifiedArgs);

  // tslint:disable-next-line: no-console
  console.log("Deploying", chalk.cyan(contractName), "contract to", chalk.magenta(contractAddress));

  await contract.deployed();

  deployDetails.push({ name: contractName, address: contract.address, args: contractArgs });

  return contract
}

const pause = (time: number) => new Promise(resolve => setTimeout(resolve, time));

const verifiableNetwork = ["mainnet", "ropsten", "rinkeby", "goerli", "kovan", "mumbai", "polygon", "avalanche", "fuji", "fantom", "fantom_testnet", "gnosis", "optimism", "optimism_kovan", "arbitrum", "arbitrum_rinkeby", "avalanche", "fuji"];

const verify = async () => {
  // tslint:disable-next-line: no-console
  console.log("Beginning Etherscan verification process...\n", 
    chalk.yellow(`WARNING: The process will wait two minutes for Etherscan \nto update their backend before commencing, please wait \nand do not stop the terminal process...`)
  );

  const bar = new ProgressBar('Etherscan update: [:bar] :percent :etas', { 
    total: 50,
    complete: '\u2588',
    incomplete: '\u2591',
  });
  // two minute timeout to let Etherscan update
  const timer = setInterval(() => {
    bar.tick();
    if(bar.complete) {
      clearInterval(timer);
    }
  }, 2300);

  await pause(120000);

  // there may be some issues with contracts using libraries 
  // if you experience problems, refer to https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html#providing-libraries-from-a-script-or-task
  // tslint:disable-next-line: no-console
  console.log(chalk.cyan("\n🔍 Running Etherscan verification..."));
  
  await Promise.all(deployDetails.map(async contract => {
    // tslint:disable-next-line: no-console
    console.log(`Verifying ${contract.name}...`);
    try {
      await hre.run("verify:verify", {
        address: contract.address,
        constructorArguments: contract.args
      });
      // tslint:disable-next-line: no-console
      console.log(chalk.cyan(`✅ ${contract.name} verified!`));
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error);
    }
  }));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    // tslint:disable-next-line: no-console
    console.error(error);
    process.exit(1);
  });