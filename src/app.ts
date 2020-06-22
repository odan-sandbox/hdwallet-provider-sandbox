import HDWalletProvider from "@truffle/hdwallet-provider";
import Web3 from "web3";

const mnemonic =
  "squirrel artefact dog lens insane behind vacuum local fence can time gesture";
function getProviderForGanache(): HDWalletProvider {
  const provider = new HDWalletProvider(
    mnemonic,
    "http://localhost:8080/97276aae4891ee048b13ed6453cd5e59",
    0,
    10
  );

  return provider;
}

function getProviderForDevnet(): HDWalletProvider {
  const provider = new HDWalletProvider(
    mnemonic,
    "http://localhost:8501/",
    0,
    10
  );

  return provider;
}

function getProviderForRopsten(): HDWalletProvider {
  const endpoint = "https://ropsten.infura.io/v3/xxxx";
  const provider = new HDWalletProvider(mnemonic, endpoint, 0, 10);
  return provider;
}

async function main(): Promise<void> {
  const provider = getProviderForRopsten();
  // const provider = getProviderForDevnet();
  // const provider = getProviderForGanache();
  const web3 = new Web3(provider);

  const accounts = await web3.eth.getAccounts();
  console.log(accounts);

  console.log(await web3.eth);

  const receipt = await web3.eth.sendTransaction({
    from: accounts[0],
    to: accounts[1],
    value: web3.utils.toWei("0.00001", "ether"),
  });

  console.log(receipt);

  provider.engine.stop();
}

main();

process.on("unhandledRejection", (reason) => {
  console.error(reason);
  process.exit(1);
});
