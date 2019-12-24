import React, { useState } from "react";

interface Props {
  initialValue: number;
  disabled: boolean;
  what: number;
  interval?: number;
}

function branch() {
  console.log("branch test");
}

const Counter = ({ initialValue }: Props) => {
  if (initialValue < -1) {
    branch();
    return null;
  }

  // const [value] = useState(0);

  return <div>{initialValue}</div>;
};

export default Counter;
