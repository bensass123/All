// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the momentJS library
var moment = require("moment");

// Here we create a variable for holding the name and moving date
var name = "Kevin";
var movingDate = moment("09/01/2015", "MM/DD/YYYY");

ReactDOM.render(
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">

        {/* Inserted the name, movingDate, and length */}
        <h2>My name is {name}.</h2>
        <h1>I moved to Charlotte on {movingDate.format("MM/DD/YYYY")}</h1>
        <hr />
        <h2>I've been here for: {movingDate.fromNow(true)}.
        </h2>
      </div>
    </div>
  </div>, document.getElementById("app"));