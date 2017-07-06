// Include React
var React = require("react");



// Create the Parent Component
var Grandchild2 = React.createClass({
    render: function() {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Grandchild 2</h3>
                </div>
                <div className="panel-body">
                    Panel content
                </div>
            </div>
        );
    }
});

module.exports = Grandchild2;