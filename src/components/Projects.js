import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s1 from '../images/s1.png';
import s2 from '../images/s2.png';

class Projects extends Component {
	componentDidMount() {
		console.log('<Projects />');
	}

	render() {
		const style = { background: '#fff' };

		return (
			<div id="services" className="wrp-xlg" style={style}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-auto">
							<h2 className="text-center">Projects</h2>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-8 text-center">
							<p>Doing quality work since last year</p>
							<br /><br />
						</div>
					</div>
					<div className="row justify-content-center text-center">
						<div className="col-4">
							<h2>Care International Placement Corporation</h2>
							<div className="bigScreenshot">
								<img src={s1} alt="careinternationalph" />
							</div>
						</div>
						<div className="col-5">
							<h2>Centralized Media File Explorer</h2>
							<div className="bigScreenshot">
								<img src={s2} alt="careinternationalph" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Projects.propTypes = {
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Projects);
