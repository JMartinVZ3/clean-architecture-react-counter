export interface ClipboardService {
    readFrom(): Promise<number>
    
    }
  
    export const browserClipboard: ClipboardService = {
        readFrom: async () => {
            const value = await navigator.clipboard.readText();
            return Number(value);
        }
}
  
  // I skip the error handling, that's a topic on its own.