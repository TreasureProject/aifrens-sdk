import { AIFrensClient, ChatInput } from "../src/index.js";
import { mnemonicToAccount } from "viem/accounts";

async function main() {
  console.log("Starting chat example...");
  const account = mnemonicToAccount("PutYourSeedPhraseHere");
  const sdk = new AIFrensClient(account);
  
  const input: ChatInput = {
    message: "Hello, how are you?",
    senderName: "John Doe",
    senderId: account.address,
    chatHistory: [],
    agentName: "0xdacd02dd0ce8a923ad26d4c49bb94ece09306c3e", //Wiz Token ID
    chatId: `${account.address}-0xdacd02dd0ce8a923ad26d4c49bb94ece09306c3e`,
    isGroupChat: false,
    currency: 'MAGIC',
  };
  const response = await sdk.chat(input);
  console.log(response);
}

main();
