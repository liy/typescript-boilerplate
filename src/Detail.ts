export interface Detail {
  field1: string;
  field2: string;
}

export interface Person {
  name: string;
  age: number;
  gender: "female" | "male";
  detail?: Detail;
}
