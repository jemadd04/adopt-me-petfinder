import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Cocoa",
      animal: "Dog",
      breed: "Pitbull Mix",
    }),
    React.createElement(Pet, {
      name: "Buddy",
      animal: "Dog",
      breed: "German Shepherd",
    }),
    React.createElement(Pet, {
      name: "Harmony",
      animal: "Cat",
      breed: "Tabby",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
