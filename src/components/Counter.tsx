/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  initialValue: number;
  disabled: boolean;
  what: number;
  interval?: number;
}

const Counter = ({ initialValue }: Props) => {
  const [result, setResult] = useState("default");
  useEffect(() => {
    axios
      .get("https://postman-echo.com/get?foo1=bar1&foo2=bar2")
      .then(response => {
        setResult(response.data);
      });
  }, []);

  return (
    <>
      <div>{initialValue}</div>
      <label>
        {result}
        <input />
      </label>
    </>
  );
};

export default Counter;
