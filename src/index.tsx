// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("app"));

interface Animal {
  name: string;
}

interface AnimalCreator {
  new (name: string): Animal;
}

class Dog implements Animal {
  constructor(public name = "dog") {
    console.log("dog creator");
  }
}

function create(creatorClass: AnimalCreator, name: string): Animal {
  return new creatorClass(name);
}

console.log(create(Dog, "test").name);
