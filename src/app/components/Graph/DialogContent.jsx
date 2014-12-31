var _ = require( 'lodash' );
var React = require( 'react' );
var mui = require( 'material-ui' );

var RadioButtonGroup = require( './RadioButtonGroup.jsx' );

var DialogContent = React.createClass( {
	displayName: 'DialogContent',
	getInitialState: function () {
		return { selected: null };
	},
	getSelectedType: function () {
		return this.state.selected;
	},
	_radioButtonOptions: [
		{ value: 'line', label: 'Line' },
		{ value: 'bar', label: 'Bar' },
		{ value: 'radar', label: 'Radar' },
		{ value: 'doughnut', label: 'Doughnut' },
		{ value: 'pie', label: 'Pie' },
		{ value: 'polar', label: 'Polar' },
		{ value: 'table', label: 'Table' }
	],
	render: function() {
		return (
			<div>
				<h1>Select Graph Type</h1>
				<RadioButtonGroup name="graphType" options={this._radioButtonOptions} onChange={this._onChange}/>
			</div>
		);
	},
	_onChange: function ( val ) {
		if ( this.state.selected === val ) { // unselect
			this.setState( { selected: null } );
		} else {
			this.setState( { selected: val } );
		}
	}
} );

module.exports = DialogContent;
