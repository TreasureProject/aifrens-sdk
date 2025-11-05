# aifrens-sdk

Official Node.js SDK for interacting with the x402 AI Frens API. This SDK enables you to chat with AI agents, generate images, videos, and memes using blockchain-based payments.

## Features

- 💬 **Chat with AI Agents** - Interact with AI agents in conversations
- 🎨 **Generate Images** - Create images with AI, optionally including character features
- 🎬 **Generate Videos** - Create videos with AI-powered generation
- 😂 **Generate Memes** - Create memes with AI assistance
- 🔒 **Blockchain Payments** - Built-in payment handling via x402 protocol
- 📦 **TypeScript Support** - Fully typed for better developer experience
- 🌐 **Multi-format** - Supports both ESM and CommonJS

## Installation

```bash
npm install @treasure_project/aifrens-sdk
```

## Prerequisites

This SDK requires a blockchain account signer for payment processing.

**For server-side usage:**
- `viem` (for account creation) - already included as a dependency
- A wallet account or mnemonic phrase

**For client-side usage:**
- You can use wagmi account directly

## Quick Start

```typescript
import { AIFrensClient } from "@treasure_project/aifrens-sdk";
import { mnemonicToAccount } from "viem/accounts";

// Initialize the client with your account
const account = mnemonicToAccount("your mnemonic phrase here");
const sdk = new AIFrensClient(account);

// Optional: Set maximum payment amount (default: 1000000000)
// const sdk = new AIFrensClient(account, 5000000000);
```

## Examples

The `examples` folder includes some examples for how to use the SDK. You can run them using:

```bash
npm run example:chat
npm run example:image
npm run example:video
npm run example:meme
```

**Note:** Make sure to update the mnemonic phrase in the example files before running them.

## TypeScript Support

This SDK is written in TypeScript and includes full type definitions. All types are exported for your convenience:

```typescript
import type {
  ChatInput,
  ChatResponse,
  GenerateImageInput,
  GenerateImageResponse,
  GenerateVideoInput,
  GenerateVideoResponse,
  GenerateMemeInput,
  GenerateMemeResponse,
  MetadataResponse,
  Route,
  RouteType
} from "@treasure_project/aifrens-sdk";
```

## Payment Handling

The SDK uses the x402 protocol for payment processing. All API calls (except `getMetadata()`) automatically handle payment through the blockchain. The payment response is included in every method's return value, allowing you to track transaction details.

## Error Handling

All methods may return errors in the response object. Always check for errors:

```typescript
const response = await sdk.chat(input);
if (response.response.error) {
  console.error("Error:", response.response.error);
} else {
  console.log("Success:", response.response.response);
}
```

## Keywords

sdk, api, typescript, node, ai-frens, treasure, x402, x402-ai-frens, ai, agents, agent
