// Include React
var React = require("react");

// Here we include all of the sub-components
var Grandchild1 = require("./Grandchild1");
var Grandchild2 = require("./Grandchild2");

// Create the Parent Component
var Child1 = React.createClass({
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
        <div className='row'>
            <div className="col-lg-12">
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title">Child 1</h3>
					</div>
					<div className="panel-body">
	
						<p>
							<a className="btn btn-warning btn-sm" onClick={this.onClick1}>Show Grandchild 1</a>
							<a className="btn btn-success btn-sm" onClick={this.onClick2}>Show Grandchild 2</a>
						</p>		

                        {this.state.show1 ? <Grandchild1 /> : null}
	
						{this.state.show2 ? <Grandchild2 /> : null}

					</div>
				</div>
			</div>
        </div>
        );
    }
});

module.exports = Child1;