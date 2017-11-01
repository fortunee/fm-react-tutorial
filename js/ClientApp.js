// Global React DOM

var ce = React.createElement;

var MyTitle = function () {
    return (
        ce('div', null, 
            ce('h1', null, 'Check out this component!')
        )
    );
};

var MyFirstComponent = function() {
    return (
        ce('div', null, 
            ce(MyTitle, null),
            ce(MyTitle, null),
            ce(MyTitle, null)
        )
    );
};

ReactDOM.render(
    React.createElement(MyFirstComponent),
    document.getElementById("app")
);