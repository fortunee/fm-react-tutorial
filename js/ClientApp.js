// Global React DOM

var ce = React.createElement;

var MyTitle = function(props) {
  return ce(
    "div",
    null,
    ce("h1", { style: { color: props.color } }, props.title)
  );
};

var MyFirstComponent = function() {
  return ce(
    "div",
    null,
    ce(MyTitle, { title: "House of Cards", color: "rebeccapurple" }),
    ce(MyTitle, { title: "Orange is the New Black", color: "peru" }),
    ce(MyTitle, { title: "Stranger Things", color: "burlywood" })
  );
};

ReactDOM.render(
  React.createElement(MyFirstComponent),
  document.getElementById("app")
);
