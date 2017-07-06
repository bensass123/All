// Include React
var React = require("react");


class Grandchild extends React.Component {
  render() {
    return <h1>hey, grandchild hea</h1>;
  }
}

// Export the component back for use in other files
module.exports = Grandchild;
