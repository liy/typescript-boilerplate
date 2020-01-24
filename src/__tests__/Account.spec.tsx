import { mockPerson } from "factories";

describe("Account", () => {
  it("test", () => {
    const person = mockPerson();
    expect(person.name).toEqual("test name");
  });
});
