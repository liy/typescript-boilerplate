import React from "react";
import { Person } from "./Detail";

const Account = (person: Person) => {
  return <div>{person.detail?.field1}</div>;
};

export default Account;
