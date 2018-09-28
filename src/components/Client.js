import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import bg from '../images/bg2.jpg';

class Client extends Component {
	componentDidMount() {
		console.log('<Client />');
	}

	render() {
		const style = {
			color: '#222',
			background: `linear-gradient(rgba(250, 250, 250, 0.9), rgba(250, 250, 250, 0.9 )), url(${bg})`,
			// backgroundSize: '100% 100%',
		};
		return (
			<div id="client" className="wrp-xlg wrp-bg-fixed" style={style}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-auto">
							<h2 className="text-center">CLIENTS</h2>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-8 text-center">
							<p>Feedbacks from my previous clients.</p>
							<br />
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-12 text-center">
							<div className="feedback">
								<p className="message">{`"He is the man. young, friendly, super fast, product delivered..
										This young man is very recomandable!"`}
								</p>
								<p>- fredireindl</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Client.propTypes = {
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Client);
