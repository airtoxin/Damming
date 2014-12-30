var _ = require( 'lodash' );
var React = require( 'react' );
var mui = require( 'material-ui' );

var DialogContent = React.createClass( {
	displayName: 'DialogContent',
	getInitialState: function () {
		return { selected: null };
	},
	getSelectedType: function () {
		return this.state.selected;
	},
	render: function() {
		return (
			<div>
				<h1>Select Graph Type</h1>
				<form ref="form">
					<mui.RadioButton name="graphType" value="line"     label="Line"     onClick={this._onClickLine} />
					<mui.RadioButton name="graphType" value="bar"      label="Bar"      onClick={this._onClickBar} />
					<mui.RadioButton name="graphType" value="radar"    label="Radar"    onClick={this._onClickRadar} />
					<mui.RadioButton name="graphType" value="doughnut" label="Doughnut" onClick={this._onClickDoughnut} />
					<mui.RadioButton name="graphType" value="pie"      label="Pie"      onClick={this._onClickPie} />
					<mui.RadioButton name="graphType" value="polar"    label="Polar"    onClick={this._onClickPolar}/>
				</form>
			</div>
		);
	},
	_onClickRadioButton: function ( checked, value ) {
		this.setState( {
			selected: checked ? value : null
		} );
	},
	_onClickDoughnut: function ( e, checked ) {
		this._onClickRadioButton( checked, 'doughnut' );
	},
	_onClickLine: function ( e, checked ) {
		this._onClickRadioButton( checked, 'line' );
	},
	_onClickBar: function ( e, checked ) {
		this._onClickRadioButton( checked, 'bar' );
	},
	_onClickRadar: function ( e, checked ) {
		this._onClickRadioButton( checked, 'radar' );
	},
	_onClickPolar: function ( e, checked ) {
		this._onClickRadioButton( checked, 'polar' );
	},
	_onClickPie: function ( e, checked ) {
		this._onClickRadioButton( checked, 'pie' );
	}
} );

module.exports = DialogContent;
