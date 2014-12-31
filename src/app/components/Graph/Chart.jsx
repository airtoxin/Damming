var _ = require( 'lodash' );
var color = require( 'randomcolor' );
var uuid = require( 'node-uuid' );
var React = require( 'react' );
require( 'react-chartjs/vars' ).React = React;

var charts = {
	line: {
		chart: require( 'react-chartjs/line' ),
		parse: function ( bqData, field ) {
			var xname = field.x;
			var yname = field.y;
			if ( !xname || !yname ) return;
			if ( _.indexOf( bqData.colName, xname ) === -1 || _.indexOf( bqData.colName, yname ) === -1 ) return;
			var xi = _.findIndex( bqData.colName, function ( cname ) {
				return cname === xname;
			} );
			var yi = _.findIndex( bqData.colName, function ( cname ) {
				return cname === yname;
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
	bar: {
		chart: require( 'react-chartjs/bar' ),
		parse: function ( bqData, field ) {
			var xname = field.x;
			var yname = field.y;
			if ( !xname || !yname ) return;
			if ( _.indexOf( bqData.colName, xname ) === -1 || _.indexOf( bqData.colName, yname ) === -1 ) return;
			var xi = _.findIndex( bqData.colName, function ( cname ) {
				return cname === xname;
			} );
			var yi = _.findIndex( bqData.colName, function ( cname ) {
				return cname === yname;
			} );
			var xdata = bqData.colData[ xi ];
			var ydata = bqData.colData[ yi ];
			return {
				labels: xdata,
				datasets: [
					{
						fillColor: "rgba(151,187,205,0.5)",
						strokeColor: "rgba(151,187,205,0.8)",
						highlightFill: "rgba(151,187,205,0.75)",
						highlightStroke: "rgba(151,187,205,1)",
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
			var nname = field.name;
			var vname = field.value;
			if ( !nname || !vname ) return;
			if ( _.indexOf( bqData.colName, nname ) === -1 || _.indexOf( bqData.colName, vname ) === -1 ) return;
			var ni = _.findIndex( bqData.colName, function ( cname ) {
				return cname === nname;
			} );
			var vi = _.findIndex( bqData.colName, function ( cname ) {
				return cname === vname;
			} );
			var ndata = bqData.colData[ ni ];
			var vdata = bqData.colData[ vi ];
			var data = _.map( _.zip( [ ndata, vdata ] ), function ( nvArray ) {
				return {
					label: nvArray[0],
					value: nvArray[1],
					color: color( { luminosity: 'light' } )
				};
			} );
			return data;
		}
	},
	doughnut: {
		chart: require( 'react-chartjs/doughnut' ),
		parse: function ( bqData, field ) {
			var nname = field.name;
			var vname = field.value;
			if ( !nname || !vname ) return;
			if ( _.indexOf( bqData.colName, nname ) === -1 || _.indexOf( bqData.colName, vname ) === -1 ) return;
			var ni = _.findIndex( bqData.colName, function ( cname ) {
				return cname === nname;
			} );
			var vi = _.findIndex( bqData.colName, function ( cname ) {
				return cname === vname;
			} );
			var ndata = bqData.colData[ ni ];
			var vdata = bqData.colData[ vi ];
			var data = _.map( _.zip( [ ndata, vdata ] ), function ( nvArray ) {
				return {
					label: nvArray[0],
					value: nvArray[1],
					color: color( { luminosity: 'light' } )
				};
			} );
			return data;
		}
	},
	table: {
		chart: React.createClass( {
			displayName: 'Table',
			render: function () {
				var heads = this.props.data.colName.map( function ( name ) {
					return ( <th key={uuid.v4()}>{name}</th> );
				} );
				var bodys = _.zip.apply( this, this.props.data.colData ).map( function ( data ) {
					var row = data.map( function ( d ) {
						return ( <td key={uuid.v4()}>{d}</td> );
					} );
					return (
						<tr key={uuid.v4()}>{row}</tr>
					);
				} );
				return (
					<table className="table table-striped">
						<thead><tr>{heads}</tr></thead>
						<tbody>{bodys}</tbody>
					</table>
				);
			}
		} ),
		parse: function ( bqData ) {
			return bqData;
		}
	}
};

var Chart = React.createClass( {
	displayName: 'Chart',
	render: function() {
		var Cht = charts[ this.props.type ].chart;
		var data = charts[ this.props.type ].parse( this.props.bqData, this.props.field )
		if ( !data ) return false;
		return (
			<Cht ref="chart" data={data} height={300} width={800}/>
		);
	},
	shouldComponentUpdate: function ( nextProps ) {
		return !_.isEqual( this.props, nextProps );
	}
} );

module.exports = Chart;
