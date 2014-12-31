var _ = require( 'lodash' );
var React = require( 'react' );
var mui = require( 'material-ui' );

var Chart = require( './Chart.jsx' );

var Panel = React.createClass( {
	displayName: 'Panel',
	propTypes: {
		type: React.PropTypes.string,
		bqData: React.PropTypes.object
	},
	getInitialState: function () {
		return {
			field: {}
		};
	},
	render: function() {
		return (
			<mui.Paper zDepth={1}>
				<h1>{this.props.type}</h1>
				{this._chartOptions()}
				<mui.Paper>
					<Chart bqData={this.props.bqData} type={this.props.type} field={this.state.field} />
				</mui.Paper>
			</mui.Paper>
		);
	},
	_chartOptions: function () {
		switch ( this.props.type ) {
			case 'line':
			case 'bar':
				return (
					<section>
						<p>Field Name</p>
						<mui.Input ref="linex" type="text" name="X" placeholder="X" multiline={false} required={true} />
						<mui.Input ref="liney" type="text" name="Y" placeholder="Y" multiline={false} required={true} />
						<mui.RaisedButton label="Set Field" secondary={true} onClick={this._onClickOkLine}/>
					</section>
				);
			case 'pie':
			case 'doughnut':
				return (
					<section>
						<p>Field Name</p>
						<mui.Input ref="circlename"  type="text" name="Name"  placeholder="Name"  multiline={false} required={true}/>
						<mui.Input ref="circlevalue" type="text" name="Value" placeholder="Value" multiline={false} required={true}/>
						<mui.RaisedButton label="Set Field" secondary={true} onClick={this._onClickOkCircle}/>
					</section>
				);
		}
	},
	_onClickOkLine: function () {
		this.setState( {
			field: {
				x: this.refs.linex.getValue(),
				y: this.refs.liney.getValue()
			}
		} );
	},
	_onClickOkCircle: function () {
		this.setState( {
			field: {
				name:  this.refs.circlename.getValue(),
				value: this.refs.circlevalue.getValue()
			}
		} );
	}
} );

module.exports = Panel;
