/* Static dependencies */

/* JS dependencies */
import React from 'react';

export default class Play extends React.Component {

	constructor (...args) {
		super(...args);

		this.state = {
		};
	}

	render () {
		return (
			<h1>This is Play page, pairsNum = { this.props.params ? this.props.params.pairsNum : '' }</h1>
		);
	}

};

Play.propTypes = {
};