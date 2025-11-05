import { AIFrensClient, GenerateMemeInput } from "../src/index.js";
import { mnemonicToAccount } from "viem/accounts";

async function main() {
  console.log("Starting meme example...");
  const account = mnemonicToAccount("PutYourSeedPhraseHere");
  const sdk = new AIFrensClient(account);
  
  const input: GenerateMemeInput = {
    prompt: "Riding a unicorn, shouting Mooooon",
    agentName: "0xdacd02dd0ce8a923ad26d4c49bb94ece09306c3e", //Wiz Token ID
    mode: "vanilla",
  };
  const response = await sdk.generateMeme(input);
  console.log(response);
}

main();
