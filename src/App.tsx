import { useState } from "react";

import { Text } from "./components/Text";

import "./styles/global.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Text asChild={false}>Hello</Text>
    </div>
  );
}

export default App;
