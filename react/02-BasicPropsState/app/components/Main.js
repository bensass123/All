// Include React
var React = require("react");

// Include Child
var Child = require("./Child");

var style = {textAlign: 'center'}

// This is the Main component
var Main = React.createClass({
  handleClicks: function(){
    this.setState({clicks: this.state.clicks + 1})
  },
  // Here we set a generic set of states associated with our Main Component
  getInitialState: function() {
    return {
      clicks: 0
    };
  },
  // Here we describe our component's render method
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h1 style ={{textAlign: 'center', color: 'red', backgroundColor: 'orange'}}>THINGS</h1>
            
          </div>
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">{this.state.clicks}</h3>
                <button type="button" className="btn btn-primary" onClick={this.handleClicks}>Click</button>
              </div>

            </div>
          </div>

          {/* Passing 3 props to the Child component. These are accessible in Child as this.props  */}
          <Child
            clicks = {this.state.clicks}
          />
        </div>
      </div> 
    );
  }
});

// Export the component back for use in other files
module.exports = Main;


