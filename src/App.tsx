import { useState } from "react";
import "./styles/global.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="font-bold text-2xl text-violet-500">Coe</h1>
    </div>
  );
}

export default App;
