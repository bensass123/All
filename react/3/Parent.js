// Include React
var React = require("react");

// Include the Header Component
var Child = require("./Child");

class Parent extends React.Component {
  render() {
    return <div>
                <h1>HEY I'M A PARENT</h1>;
                </Child>
           </div>
  }
}

// Export the component back for use in other files
module.exports = Parent;
