var React = require( 'react' );

var Header = React.createClass( {
	displayName: 'Header',
	render: function() {
		return (
			<div>
				<h1>Damming</h1>
				<h2>BigQuery dashboard</h2>
			</div>
		);
	}
} );

module.exports = Header;
