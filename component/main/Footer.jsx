var React = require( 'react' );
var mui = require( 'material-ui' );

var Footer = React.createClass( {
	displayName: 'Footer',
	render: function() {
		return (
			<mui.Paper zDepth={3}>
				<h1>Footer</h1>
			</mui.Paper>
		);
	}
} );

module.exports = Footer;
