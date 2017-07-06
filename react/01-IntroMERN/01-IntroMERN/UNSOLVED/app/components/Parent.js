// Include React
var React = require("react");
// TO BE ADDED

// ===========
// Axios for AJAX requests.
// Either require Axios here or create a helpers file we will require below


// Here we include all of the sub-components
var Child = require("./Child");

//axios api helpers
var helpers = require('../utils/helpers');

// Create the Parent Component
var Parent = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return {
      clicks: 0,
      clickID: 'Main'
    };
  },

  // on load display clicks
  componentDidMount: function() {
    console.log('component mounted');

    helpers.getClicks().then(function(response){
      var newClicks = response.data.length ? response.data[0].clicks: 0;
      this.setState({
        clicks: newClicks
      });
      console.log('results', response);
      console.log('saved clicks ', newClicks);
    }.bind(this)); 
  },

  componentDidUpdate: function(prevState){
    console.log('component updated');

    //we will check if clicks have changed and update in mongo if so
    if (prevState.clicks != this.state.clicks) {
      helpers.saveClicks({clickID: this.state.clickID, clicks: this.state.clicks})
        .then(function() {
          console.log('posted to mongodb');
        });
    }
  },

  // Whenever the button is clicked we'll use setState to add to the clickCounter
  // Note the syntax for setting the state
  handleClick: function(num) {
    console.log('CLICKSCLICKS ***************************** = ' + this.state.clicks);
    this.setState({ clicks: this.state.clicks + 1 });
  },

  // Whenever the button is clicked we'll use setState to reset the clickCounter
  // This will reset the clicks -- and it will be passed  ALL children
  resetClick: function(number) {
    this.setState({ clicks: 0 });
  },

  // Here we render the function
  render: function() {
    return (
      <div className="container">

        <div className="row">

          <div className="jumbotron">
            <h2>All my children: A Tale of Reactive Components</h2>
            <hr />
            <p>
              <em>Now backed by the power of MongoDB!</em>
              Just visit <a href="/api">/api</a> to check out the DB!
            </p>
            <p>
              {/*
                Here we create a button click.
                Note how we have an onClick event associate with our handleClick function.
              */}
              <a
                className="btn btn-primary btn-lg"
                type="button"
                onClick={this.handleClick}
                
              >
                CLICK ME!!!!
              </a>
              {/* Here we create a button click for resetting the clickCounter */}
              <a
                className="btn btn-danger btn-lg"
                type="button"
                onClick={this.resetClick}
              >
                Reset
              </a>
            </p>
          </div>
          {/* This represents the "Parent" */}
          <div className="col-md-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Parent</h3>
              </div>
              <div className="panel-body text-center">

                {/* This is where we'll show the click count for the parent */}
                <h1>{this.state.clicks}</h1>

                {/*
                  Here we'll deploy the child component.
                  We'll pass it the parent's click counter as a "state"
                */}
                <Child clicks={this.state.clicks} />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Parent;
