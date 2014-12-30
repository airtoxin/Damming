var React = require( 'react' );
var mui = require( 'material-ui' );

var Main = React.createClass( {
	displayName: 'Main',
	render: function() {
		return (
			<div className="app-main">
				<h1>material-ui</h1>
				<h2>example project</h2>
				<mui.RaisedButton label="Super Secret Password" primary={true} />
			</div>
		);
	}
} );

module.exports = Main;
