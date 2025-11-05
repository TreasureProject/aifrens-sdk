import { ChatInput, ChatResponse, GenerateImageInput, GenerateImageResponse, GenerateMemeInput, GenerateMemeResponse, GenerateVideoInput, GenerateVideoResponse, MetadataResponse, Route, RouteType } from './types.js';
import { API_URL } from './constants.js';
import { wrapFetchWithPayment, decodeXPaymentResponse, MultiNetworkSigner, Signer } from "x402-fetch";

// Re-export types for convenience
export type { MetadataResponse, Route, RouteType };

export class AIFrensClient {
    private fetchWithPayment: ReturnType<typeof wrapFetchWithPayment>;
    constructor(private account: Signer | MultiNetworkSigner, maxPaymentAmount: number = 1000000000) {
        this.fetchWithPayment = wrapFetchWithPayment(fetch, this.account, BigInt(maxPaymentAmount.toString()));
    }
  
    /**
     * Sends a chat message to the AI Frens API
     * @param data - The chat input data containing message, sender information, chat history, agent name, chat ID, and group chat flag
     * @returns Promise resolving to an object containing the payment response and the chat response (which may include an error or response string)
     */
    async chat(data: ChatInput) {
        const response = await this.fetchWithPayment(`${API_URL}/chat`, {
            method: 'POST',
            body: JSON.stringify(data),
        });
        const paymentResponse = decodeXPaymentResponse(response.headers.get("x-payment-response")!);
        const responseData = await response.json() as ChatResponse;
        return {
            paymentResponse,
            response: responseData,
        };
    }

    /**
     * Generates an image using the AI Frens API
     * @param data - The image generation input containing prompt, agent name, whether to include character, and mode (vanilla or spicy)
     * @returns Promise resolving to an object containing the payment response and the image generation response (which may include success status, error, or generated image)
     */
    async generateImage(data: GenerateImageInput) {
        const response = await this.fetchWithPayment(`${API_URL}/generate-media-image`, {
            method: 'POST',
            body: JSON.stringify(data),
        });
        const paymentResponse = decodeXPaymentResponse(response.headers.get("x-payment-response")!);
        const responseData = await response.json() as GenerateImageResponse;
        return {
            paymentResponse,
            response: responseData,
        };
    }

    /**
     * Generates a video using the AI Frens API
     * @param data - The video generation input containing prompt, agent name, whether to include character, and mode (vanilla or spicy)
     * @returns Promise resolving to an object containing the payment response and the video generation response (which may include success status, error, or generated video)
     */
    async generateVideo(data: GenerateVideoInput) {
        const response = await this.fetchWithPayment(`${API_URL}/generate-media-video`, {
            method: 'POST',
            body: JSON.stringify(data),
        });
        const paymentResponse = decodeXPaymentResponse(response.headers.get("x-payment-response")!);
        const responseData = await response.json() as GenerateVideoResponse;
        return {
            paymentResponse,
            response: responseData,
        };
    }

    /**
     * Generates a meme using the AI Frens API
     * @param data - The meme generation input containing prompt, agent name, and mode (vanilla or spicy)
     * @returns Promise resolving to an object containing the payment response and the meme generation response (which may include success status, error, or generated meme)
     */
    async generateMeme(data: GenerateMemeInput) {
        const response = await this.fetchWithPayment(`${API_URL}/generate-media-meme`, {
            method: 'POST',
            body: JSON.stringify(data),
        });
        const paymentResponse = decodeXPaymentResponse(response.headers.get("x-payment-response")!);
        const responseData = await response.json() as GenerateMemeResponse;
        return {
            paymentResponse,
            response: responseData,
        };
    }

    /**
     * Fetches metadata about available routes and their pricing
     * @returns Promise resolving to the metadata response containing an array of routes with their types, prices, and symbols
     */
    async getMetadata(): Promise<MetadataResponse> {
        const response = await fetch(`${API_URL}/metadata`);
        if (!response.ok) {
            throw new Error(`Failed to fetch metadata: ${response.statusText}`);
        }
        
        const data = await response.json() as MetadataResponse;
        return data;
    }
}