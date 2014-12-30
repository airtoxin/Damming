var _ = require( 'lodash' );
var React = require( 'react' );
var mui = require( 'material-ui' );

var Chart = require( './Chart.jsx' );

var Panel = React.createClass( {
	displayName: 'Panel',
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
				return (
					<section>
						<p>Field Name</p>
						<mui.Input ref="linex" type="text" name="X" placeholder="X" multiline={false} required={true} />
						<mui.Input ref="liney" type="text" name="Y" placeholder="Y" multiline={false} required={true} />
						<mui.RaisedButton label="Set Field" secondary={true} onClick={this._onClickOkLine}/>
					</section>
				);
			case 'pie':
				return (
					<section>
						<p>Field Name</p>
						<mui.Input type="text" name="Field" placeholder="score" multiline={false} required={true}/>
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
	}
} );

module.exports = Panel;