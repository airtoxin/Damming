var _ = require( 'lodash' );
var uuid = require( 'node-uuid' );
var React = require( 'react' );
var mui = require( 'material-ui' );

var AddButton = require( './Graph/AddButton.jsx' );
var Panels    = require( './Graph/Panels.jsx' );

var Graph = React.createClass( {
	displayName: 'Graph',
	propTypes: {
		bqData: React.PropTypes.object
	},
	getInitialState: function () {
		return {
			panels: [ { panelType: 'table', id: uuid.v4() } ]
		};
	},
	render: function() {
		return (
			<mui.Paper zDepth={3}>
				<h1>Graph</h1>
				<Panels panels={this.state.panels} bqData={this.props.bqData} />
				<AddButton onSelectPanelType={this._onSlectPanelType} />
			</mui.Paper>
		);
	},
	_onSlectPanelType: function ( panelType ) {
		this.setState( {
			panels: this.state.panels.concat( [ {
				panelType: panelType,
				id: uuid.v4()
			} ] )
		} );
	}
} );

module.exports = Graph;
