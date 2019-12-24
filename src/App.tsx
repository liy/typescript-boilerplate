import React from "react";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <Counter
        initialValue={10}
        disabled={false}
        interval={2000}
        what={1}
      ></Counter>
    </div>
  );
};

export default App;
