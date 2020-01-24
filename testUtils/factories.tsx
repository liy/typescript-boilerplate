import { Person } from "src/Detail";

export function mockPerson(): Person {
  return {
    name: "test name",
    age: 12,
    gender: "female",
    account: {
      username: "abc",
      billing: {
        cardNumber: "abcd",
        expireDate: {
          month: "11",
          year: "22"
        }
      }
    }
  };
}
