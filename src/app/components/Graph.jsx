var _ = require( 'lodash' );
var React = require( 'react' );
var mui = require( 'material-ui' );

var AddButton = require( './Graph/AddButton.jsx' );
var Panels    = require( './Graph/Panels.jsx' );

var Graph = React.createClass( {
	displayName: 'Graph',
	getInitialState: function () {
		return {
			panels: [ 'bar' ]
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
			panels: this.state.panels.concat( panelType )
		} );
	}
} );

module.exports = Graph;
