// your code is going to go here for now
const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ])
}

const App = () => {
    return React.createElement(
        "div",
        { id: "something-important" },
        [
            React.createElement('h1', {}, "Adopt Me!"),
            React.createElement(Pet, { name: "Cocoa", animal: "Dog", breed: "Pitbull Mix"}),
            React.createElement(Pet, { name: "Buddy", animal: "Dog", breed: "German Shepherd"}),
            React.createElement(Pet, { name: "Harmony", animal: "Cat", breed: "Tabby"}),
        ]
    )
};

ReactDOM.render(React.createElement(App), document.getElementById('root'))