import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaLaptop, FaChrome, FaMobileAlt } from 'react-icons/fa';

class Client extends Component {
	componentDidMount() {
		console.log('<Client />');
	}

	render() {
		const style = { background: '#050505', color: '#fff' };

		return (
			<div id="contact" className="wrp-lg" style={style}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-auto">
							<h2 className="text-center">CONTACT</h2>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-8 text-center">
							<p>You can reach me at <a href="mailto:ianoderon@gmail.com" target="_top">ianoderon@gmail.com</a></p>
							<br />
						</div>
					</div>
					<div className="row justify-content-center text-center">
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
