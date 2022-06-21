import { useCounterStorage} from "../services/counterAdapter";
import { CounterStorageService } from "./ports";

export function useCounter() {
  const counterStorageService:CounterStorageService = useCounterStorage();

  async function incrementCounter() {

    counterStorageService.increment();
    
  }

  async function decrementCounter() {

    counterStorageService.decrement();

  }

  async function incrementByClipdboardValue() {
    // Take the value from the clipboard;
    // Call the increment action.
  }

  return { incrementCounter, decrementCounter };
}