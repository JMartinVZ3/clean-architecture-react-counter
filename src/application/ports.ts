import { Counter } from "../domain/counter";

export interface CounterStorageService {
  counter: Counter;

  increment(): void;
  decrement(): void;
}
