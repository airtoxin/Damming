var React = require( 'react' );
var uuid = require( 'node-uuid' );

var Panel = require( './Panel.jsx' );

var Panels = React.createClass( {
	displayName: 'Panels',
	render: function() {
        var self = this;
		var panels = this.props.panels.map( function ( panelType ) {
			return (<Panel type={panelType} bqData={self.props.bqData} key={uuid.v4()}/>);
		} );
		return (
			<div>
				{panels}
			</div>
		);
	}
} );

module.exports = Panels;
