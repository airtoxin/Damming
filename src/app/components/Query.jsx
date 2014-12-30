var React = require( 'react' );
var mui = require( 'material-ui' );

var Query = React.createClass( {
	displayName: 'Query',
	render: function() {
		return (
			<div>
				<mui.Input
					type="text"
					name="Query"
					description="input your Query of BigQuery"
					multiline="true"
				/>
				<mui.RaisedButton label="Send Query" />
			</div>
		);
	}
} );

module.exports = Query;
