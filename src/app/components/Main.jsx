var React = require( 'react' );
var mui = require( 'material-ui' );

var Header = require( './Header.jsx' );
var Query = require( './Query.jsx' );
var Graph = require( './Graph.jsx' );
var Footer = require( './Footer.jsx' );

var Main = React.createClass( {
	displayName: 'Main',
	render: function() {
		return (
			<div>
				<Header />
				<mui.RaisedButton label="Super Secret Password" primary={true} />
				<Query />
				<Graph />
				<Footer />
			</div>
		);
	}
} );

module.exports = Main;
