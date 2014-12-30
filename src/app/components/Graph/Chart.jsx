var _ = require( 'lodash' );
var React = require( 'react' );
require( 'react-chartjs/vars' ).React = React;

var charts = {
	line: {
		chart: require( 'react-chartjs/line' ),
		parse: function ( bqData, field ) {
			var xname = field.x;
			var yname = field.y;
			if ( !xname || !yname ) return;
			var xi = _.findIndex( bqData.colName, function ( cname ) {
				return cname == xname;
			} );
			var yi = _.findIndex( bqData.colName, function ( cname ) {
				return cname == yname;
			} );
			var xdata = bqData.colData[ xi ];
			var ydata = bqData.colData[ yi ];
			return {
				labels: xdata,
				datasets: [
					{
						fillColor: "rgba(220,220,220,0.2)",
						strokeColor: "rgba(220,220,220,1)",
						pointColor: "rgba(220,220,220,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(220,220,220,1)",
						data: ydata
					}
				]
			}
		}
	},
	pie: {
		chart: require( 'react-chartjs/pie' ),
		parse: function ( bqData, field ) {
			return bqData;
		}
	}
};

var Chart = React.createClass( {
	displayName: 'Chart',
	render: function() {
		var Chart = charts[ this.props.type ].chart;
		var data = charts[ this.props.type ].parse( this.props.bqData, this.props.field )
		if ( !data ) return false;
		return (
			<Chart data={data} height={300} width={800}/>
		);
	}
} );

module.exports = Chart;
