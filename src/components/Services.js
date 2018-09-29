import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaLaptop, FaChrome, FaMobileAlt } from 'react-icons/fa';
import { polygon, drawRandomPolygon } from '../helper.js';

class Services extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log('<Services />');
	}

	render() {
		const style = { background: '#050505', color: '#fff' };
		const canvasStyle = { position: 'absolute' };

		return (
			<div id="services" className="wrp-xlg" style={style}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-auto">
							<h2 className="text-center">SERVICES</h2>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-8 text-center">
							<p>Accepting small to medium projects.</p>
							<br />
						</div>
					</div>
					<div className="row justify-content-center text-center">
						<div className="col-4">
							<h2>Mobile</h2>
							<div className="bigIcon">
								<FaMobileAlt />
							</div>
							<p>Android & IOS (React Native)</p>
						</div>
						<div className="col-4">
							<h2>Website</h2>
							<div className="bigIcon">
								<FaChrome />
							</div>
							<p>Supported by major browsers</p>
						</div>
						<div className="col-4">
							<h2>Desktop</h2>
							<div className="bigIcon">
								<FaLaptop />
							</div>
							<p>Windows OS 7 and above</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Services.propTypes = {
	// windowHeight: PropTypes.number,
	// windowWidth: PropTypes.number,
};

const mapStateToProps = state => ({
	// windowHeight: state.windowHeight,
	// windowWidth: state.windowWidth,
});

export default connect(mapStateToProps)(Services);
