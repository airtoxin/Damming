var React = require( 'react' );

var Panel = require( './Panel.jsx' );

var Panels = React.createClass( {
	displayName: 'Panels',
	propTypes: {
		panels: React.PropTypes.arrayOf( React.PropTypes.string ),
		bqData: React.PropTypes.object
	},
	render: function() {
        var self = this;
		var panels = this.props.panels.map( function ( panel ) {
			return (<Panel type={panel.panelType} bqData={self.props.bqData} key={panel.id}/>);
		} );
		return (
			<div>
				{panels}
			</div>
		);
	}
} );

module.exports = Panels;
