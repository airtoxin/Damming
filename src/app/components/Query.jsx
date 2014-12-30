var React = require( 'react' );
var mui = require( 'material-ui' );

var Query = React.createClass( {
	displayName: 'Query',
	render: function() {
		return (
			<mui.Paper zDepth={3}>
				<h1>Query</h1>
				<mui.Input
					type="text"
					name="Query"
					description="input your Query of BigQuery"
					multiline={true}
				/>
				<mui.RaisedButton label="Send Query" secondary={true} />
			</mui.Paper>
		);
	}
} );

module.exports = Query;
