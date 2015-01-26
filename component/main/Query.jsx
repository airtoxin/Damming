var React = require( 'react' );
var mui = require( 'material-ui' );

var Query = React.createClass( {
	displayName: 'Query',
	propTypes: {
		onClickSendQuery: React.PropTypes.func
	},
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
				<mui.RaisedButton label="Send Query" secondary={true} onClick={this.props.onClickSendQuery}/>
			</mui.Paper>
		);
	}
} );

module.exports = Query;
