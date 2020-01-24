export interface CardDate {
  month: string;
  year: string;
}

export interface Billing {
  cardNumber: string;
  expireDate: CardDate;
}

export interface Delivery {
  address1: string;
  address2: string;
  postcode: string;
}

export interface AccountModel {
  username: string;
  billing: Billing;
  delivery?: Delivery;
}

export interface Person {
  name: string;
  age: number;
  gender: "female" | "male";
  account: AccountModel;
}
