export type CounterValue = number;
export type CounterDiff = number;

export type Counter = {
  value: number;
}

export function incrementBy(current: Counter, difference: CounterDiff): Counter {

  const value = current.value + difference;

  return { value }
}
