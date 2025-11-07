export type RouteType = 'chat' | 'image' | 'video' | 'meme' | 'media';

export interface Route {
  route: string;
  type: RouteType;
  price: string;
  prices: {
    [tokenSymbol: string]: {
      tokenAddress: string;
      price: string;
    };
  };
}

export interface MetadataResponse {
  tokenSymbols: Record<string, string>;
  routes: Route[];
}

export interface ChatInput {
    message: string;
    senderName: string;
    senderId: string;
    chatHistory: Array<{
        role: 'user' | 'assistant';
        sender: string;
        content: string;
    }>;
    agentName: string;
    chatId: string;
    isGroupChat: boolean;
    currency: 'USDC' | 'MAGIC' | 'MIO' | 'SMOL';
}

export interface ChatResponse {
    error?: string;
    response?: string;
}

export interface GenerateImageInput {
  prompt: string;
  agentName: string;
  includeCharacter: boolean;
  mode: 'vanilla' | 'spicy';
  currency: 'USDC' | 'MAGIC' | 'MIO' | 'SMOL';
}

export interface GenerateImageResponse {
  success?: boolean;
  error?: string;
  image?: string;
}

export interface GenerateVideoInput {
  prompt: string;
  agentName: string;
  includeCharacter: boolean;
  mode: 'vanilla' | 'spicy';
  currency: 'USDC' | 'MAGIC' | 'MIO' | 'SMOL';
}

export interface GenerateVideoResponse {
  success?: boolean;
  error?: string;
  video?: string;
}

export interface GenerateMemeInput {
  prompt: string;
  agentName: string;
  mode: 'vanilla' | 'spicy';
  currency: 'USDC' | 'MAGIC' | 'MIO' | 'SMOL';
}

export interface GenerateMemeResponse {
  success?: boolean;
  error?: string;
  meme?: string;
}