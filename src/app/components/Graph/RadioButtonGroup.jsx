var React = require( 'react' );
var mui = require( 'material-ui' );

var RadioButtonGroup = React.createClass({
	propTypes: {
		name: React.PropTypes.string,
		onChange: React.PropTypes.func,
		options: React.PropTypes.array
	},
	_onClick: function(val){
		this.setState({
			selected: val
		});
		if(this.props.onChange) this.props.onChange(val);
	},
	getValue: function(){
		return this.state.selected;
	},
	render: function(){
		var options = this.props.options.map(function(option){
			var defaultChecked = this.props.defaultValue === option.value;
			return <mui.RadioButton
				name={this.props.name}
				key={option.value}
				value={option.value}
				label={option.label}
				defaultChecked={defaultChecked}
				onClick={this._onClick.bind(this,option.value)}
			/>
		},this);

		return (
			<div className="mui-radio-button-group mui-radio-button-group--vertical ">
				{options}
			</div>
		)
	}
});

module.exports = RadioButtonGroup;
