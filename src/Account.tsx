import React from "react";
import { Person } from "./Detail";

const Account = (person: Person) => {
  return <div>{person.account.delivery?.address1}</div>;
};

export default Account;
