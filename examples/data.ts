import { AIFrensClient, ChatInput } from "../src/index.js";
import { mnemonicToAccount } from "viem/accounts";

async function main() {
  console.log("Starting data example...");
  const account = mnemonicToAccount("PutYourSeedPhraseHere");
  const sdk = new AIFrensClient(account);
  const agentData = await sdk.getAgentData("0xdacd02dd0ce8a923ad26d4c49bb94ece09306c3e");
  console.log(agentData);

}

main();
