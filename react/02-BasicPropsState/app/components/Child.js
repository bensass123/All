// Include React
var React = require("react");



// This is the Main component
var Main = React.createClass({

  // Here we set a generic set of states associated with our Main Component
  getInitialState: function() {
    return {
      clicks: this.props.clicks * 4
    };
  },
  // Here we describe our component's render method
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h1>Parent</h1>
            
          </div>
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">feed it</h3>
                <button type="button" className="btn btn-primary" onClick={this.handleClicks}>FEED ME LEROY</button>
              </div>

            </div>
          </div>

          {/* Passing 3 props to the Child component. These are accessible in Child as this.props  */}
        
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
