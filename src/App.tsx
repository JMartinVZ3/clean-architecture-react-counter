
import { useCounter } from "./application/counter";
import { useCounterStorage } from "./services/counterAdapter";

function App() {
  
  const { counter } =  useCounterStorage();

  const { incrementCounter, decrementCounter } = useCounter();

  return (
    <div className="App">
      <h1>
         Hello World <br /> A little Redux Project. YaaY!
      </h1>
      <h3>Counter</h3>
      <h2>{counter.value}</h2>
      <button onClick={() => incrementCounter()}>Increase</button>
      <button onClick={() => decrementCounter()}>Decrease</button>
    </div>
  );
}

export default App;