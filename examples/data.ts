import { AIFrensClient } from "../src/index.js";

async function main() {
  console.log("Starting data example...");
  const sdk = new AIFrensClient();
  const agentData = await sdk.getAgentData("0xdacd02dd0ce8a923ad26d4c49bb94ece09306c3e");
  console.log(agentData);

}

main();
