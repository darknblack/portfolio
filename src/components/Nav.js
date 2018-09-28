import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addClass } from '../helper.js';
import logo from '../images/logo.png';

class Nav extends Component {
	componentDidMount() {
		console.log('<Nav />');
	}

	render() {
		const { scrollTop } = this.props;
		const changeNavbar = scrollTop >= 50;

		return (
			<Fragment>
				<nav className={'navbar fixed-top navbar-expand-lg custom-navbar-pallete' + addClass(changeNavbar, 'custom-navbar-reverse')}>
					<a className="navbar-brand" href="#1"><div id="logo" className={addClass(changeNavbar, 'logosmall')} alt="logo">IANODERON.ME</div></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#about">About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#services">Services</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#contact">Contact</a>
							</li>
						</ul>
					</div>
				</nav>
			</Fragment>
		);
	}
}

Nav.propTypes = {
	scrollTop: PropTypes.number,
};

const mapStateToProps = state => ({
	scrollTop: state.scrollTop,
});

export default connect(mapStateToProps)(Nav);
