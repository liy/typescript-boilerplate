import React from "react";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      <Counter what={2} initialValue={10} disabled={false}></Counter>
    </div>
  );
};

export default App;
