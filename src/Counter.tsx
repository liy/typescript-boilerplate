import React from "react";

interface Props {
  initialValue: number;
  disabled: boolean;
  interval?: number;
}

function branch() {
  console.log("branch test");
}

const Counter = ({ initialValue }: Props) => {
  if (initialValue < -1) {
    branch();
  }

  return <div>{initialValue}</div>;
};

export default Counter;
