var React = require( 'react' );

var Header = React.createClass( {
	displayName: 'Header',
	render: function() {
		return (
			<div>
				<h1>material-ui</h1>
				<h2>example project</h2>
			</div>
		);
	}
} );

module.exports = Header;
