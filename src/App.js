import "./App.css";
import { useState } from "react";
import Results from "./components/Results";
import calculator from "./scripts/calculator";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState("add");

  const updateFirstNumber = (event) => {
    setFirstNumber(event.target.value);
  };

  const updateSecondNumber = (event) => {
    setSecondNumber(event.target.value);
  };

  const chooseOperation = (event) => {
    setOperation(event.target.value);
  };

  const calculate = () => {
    operate(calculator[operation]);
  };

  const operate = (operation) => {
    if (operation) {
      const result = operation(+firstNumber, +secondNumber);
      if (result !== undefined || null) {
        setResult(result);
      }
    }
  };

  return (
    <div className="app" data-testid="App">
      <div className="container">
        <input
          type="number"
          name="firstNumber"
          id="firstNumber"
          data-testid="firstNumber"
          value={firstNumber}
          onChange={updateFirstNumber}
        />

        <select
          name="operation"
          id="operation"
          selected="add"
          data-testid="operation"
          onChange={chooseOperation}
        >
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">*</option>
          <option value="divide">/</option>
        </select>

        <input
          type="number"
          name="secondNumber"
          id="secondNumber"
          data-testid="secondNumber"
          value={secondNumber}
          onChange={updateSecondNumber}
        />

        <button onClick={calculate} data-testid="equalSign">
          =
        </button>

        <Results result={result} />
      </div>
    </div>
  );
}

export default App;
