var React = require( 'react' );
var mui = require( 'material-ui' );

var DialogContent = require( './DialogContent.jsx' );

var AddButton = React.createClass( {
	displayName: 'AddButton',
	render: function() {
		return (
			<div>
				<mui.RaisedButton
					label="Add Graph"
					secondary={true}
					onClick={this._onClickButton}
				/>
				<mui.Dialog
					title="Add Graph"
					actions={[
						{ text: 'Cancel' },
						{ text: 'Add', onClick: this._onClickDialogAdd }
					]}
					ref="addGraphDialog"
				>
					<DialogContent ref="DialogContent"/>
				</mui.Dialog>
			</div>
		);
	},
	_onClickButton: function () {
		this.refs.addGraphDialog.show();
	},
	_onClickDialogAdd: function () {
		var selected = this.refs.DialogContent.getSelectedType();
		this.refs.addGraphDialog.dismiss();
		if ( !selected ) return;
		this.props.onSelectPanelType( selected );
	}
} );

module.exports = AddButton;
