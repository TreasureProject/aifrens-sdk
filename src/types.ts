export type RouteType = 'chat' | 'image' | 'video' | 'meme';

export interface Route {
  route: string;
  type: RouteType;
  price: string;
  symbol: string;
}

export interface MetadataResponse {
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
}

export interface ChatResponse {
    error?: string;
    response?: string;
}

export interface GenerateImageInput {
  prompt: string;
  agentName: string
  includeCharacter: boolean;
  mode: 'vanilla' | 'spicy';
}

export interface GenerateImageResponse {
  success?: boolean;
  error?: string;
  image?: string;
}

export interface GenerateVideoInput {
  prompt: string;
  agentName: string
  includeCharacter: boolean;
  mode: 'vanilla' | 'spicy';
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
}

export interface GenerateMemeResponse {
  success?: boolean;
  error?: string;
  meme?: string;
}