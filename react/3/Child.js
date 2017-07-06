// Include React
var React = require("react");
// Include the Header Component
var Grandchild = require("./Grandchild");

class Child extends React.Component {
  render() {
    return <div>
                <h1>HEY I'M A CHILD</h1>;
                </Grandchild>
           </div>
  }
}

// Export the component back for use in other files
module.exports = Child;
