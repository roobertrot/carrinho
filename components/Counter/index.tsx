import useCounter from "../../stores/useCounter";

export default function Counter() {
  const { counter, incrementCounter, decrementCounter } = useCounter();

  return (
    <span className="flex flex-col items-center">
      <li>{counter}</li>
      <span className="flex flex-row">
        <li>
          <button className=" mr-3" onClick={() => decrementCounter()}>
            -
          </button>
        </li>
        <li>
          <button onClick={() => incrementCounter()}>+</button>
        </li>
      </span>
    </span>
  );
}
