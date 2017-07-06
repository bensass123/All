// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the Header Component
var Parent = require("./Parent");

ReactDOM.render(

  // Here we deploy the header component as 
  // though it were any other HTML element
  <div>
    <Parent />
    
  </div>,
  document.getElementById("app")
);
