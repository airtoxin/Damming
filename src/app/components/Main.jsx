var _ = require( 'lodash' );
var React = require( 'react' );
var mui = require( 'material-ui' );

var Header = require( './Header.jsx' );
var Query = require( './Query.jsx' );
var Graph = require( './Graph.jsx' );
var Footer = require( './Footer.jsx' );

var bqResponse = {
	schema: {
		fields: [
			{ mode: 'NULLABLE', name: 'pgname', type: 'STRING'  },
			{ mode: 'NULLABLE', name: 'speed',  type: 'INTEGER' },
			{ mode: 'NULLABLE', name: 'users',  type: 'INTEGER' }
		]
	},
	rows: [
		{ f: [
			{ v: 'C' },
			{ v: 100 },
			{ v: 3 }
		] }, { f: [
			{ v: 'C++' },
			{ v: 93 },
			{ v: 10 }
		] }, { f: [
			{ v: 'Java' },
			{ v: 24 },
			{ v: 89 }
		] }, { f: [
			{ v: 'Python' },
			{ v: 18 },
			{ v: 65 }
		] }, { f: [
			{ v: 'Ruby' },
			{ v: 19 },
			{ v: 70 }
		] }, { f: [
			{ v: 'JavaScript' },
			{ v: 16 },
			{ v: 80 }
		] }
	]
};


var Main = React.createClass( {
	displayName: 'Main',
	render: function() {
		var bqData = this._parseBqResponse( bqResponse );
		return (
			<div>
				<Header />
				<Query />
				<Graph bqData={bqData} />
				<Footer />
			</div>
		);
	},
	_parseBqResponse: function ( bqResponse ) {
		var columnName = _.map( bqResponse.schema.fields, function ( field ) {
			return field.name
		} );
		var rowData = _.map( bqResponse.rows, function ( row ) {
			return _.map( row.f, function ( values ) {
				return values.v
			} );
		} );
		return {
			colName: columnName,
			colData: _.zip( rowData )
		};
	}
} );

module.exports = Main;
