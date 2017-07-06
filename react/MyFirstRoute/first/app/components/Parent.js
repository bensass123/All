// Include React
var React = require("react");

// Here we include all of the sub-components
var Child1 = require("./Child1");
var Child2 = require("./Child2");

// Create the Parent Component
var Parent = React.createClass({
    getInitialState: function(){
        return {show1: false, show2: false};
    },
    onClick1: function(){
        console.log('1');
            this.setState({show1: true});
        
    },
    onClick2: function(){
        console.log('2');
            this.setState({show2: true});
        
    },

    render: function() {
        return (

        <div className="container">

            <div className="row">
                <div className="jumbotron">
                    <h2><strong>Which Child???</strong></h2>
                    <p><em>A journey through the whimsical world of React Routing</em></p>
                    
                    <p>
                        <a className="btn btn-primary btn-lg" onClick={this.onClick1}>Show Child 1</a>
                        <a className="btn btn-danger btn-lg" onClick={this.onClick2}>Show Child 2</a>
                    </p>
                </div>
            </div>
            {this.state.show1 ? <Child1 /> : null}
            {this.state.show2 ? <Child2 /> : null}
        </div>
        
        );
    }
});


module.exports = Parent;