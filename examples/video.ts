import { AIFrensClient, GenerateVideoInput } from "../src/index.js";
import { mnemonicToAccount } from "viem/accounts";

async function main() {
  console.log("Starting video example...");
  const account = mnemonicToAccount("PutYourSeedPhraseHere");
  const sdk = new AIFrensClient(account);
  
  const input: GenerateVideoInput = {
    prompt: "Dancing with a cat",
    agentName: "0xdacd02dd0ce8a923ad26d4c49bb94ece09306c3e", //Wiz Token ID
    includeCharacter: true,
    mode: "vanilla",
    currency: 'MAGIC',
  };
  const response = await sdk.generateVideo(input);
  console.log(response);
}

main();
