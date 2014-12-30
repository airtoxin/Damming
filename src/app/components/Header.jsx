var React = require( 'react' );
var mui = require( 'material-ui' );

var Header = React.createClass( {
	displayName: 'Header',
	render: function() {
		return (
			<mui.Paper zDepth={3}>
				<h1>material-ui</h1>
				<h2>example project</h2>
			</mui.Paper>
		);
	}
} );

module.exports = Header;
