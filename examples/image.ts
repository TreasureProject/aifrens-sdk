import { AIFrensClient, GenerateImageInput } from "../src/index.js";
import { mnemonicToAccount } from "viem/accounts";

async function main() {
  console.log("Starting image example...");
  const account = mnemonicToAccount("PutYourSeedPhraseHere");
  const sdk = new AIFrensClient(account);
  
  const input: GenerateImageInput = {
    prompt: "Holding a cat at the snow",
    agentName: "0xdacd02dd0ce8a923ad26d4c49bb94ece09306c3e", //Wiz Token ID
    includeCharacter: true,
    mode: "vanilla",
  };
  const response = await sdk.generateImage(input);
  console.log(response);
}

main();
