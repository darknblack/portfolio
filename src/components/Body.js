import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Header from './Header';
import About from './About';
import Services from './Services';
import Client from './Client';
import Contact from './Contact';
import Projects from './Projects';
import {
	WINDOW_RESIZE,
	WINDOW_SCROLL,
} from './Actions';
import {
	getScrollPosition,
	getWindowHeight,
	getWindowWidth,
} from '../helper';

class Body extends Component {
	componentDidMount() {
		const { WINDOW_SCROLL, WINDOW_RESIZE } = this.props;
		window.addEventListener('load', () => WINDOW_RESIZE(getWindowWidth(), getWindowHeight()));
		window.addEventListener('resize', () => WINDOW_RESIZE(getWindowWidth(), getWindowHeight()));
		window.addEventListener('scroll', () => WINDOW_SCROLL(getScrollPosition()));
	}

	componentDidUpdate(prevProps, prevState) {
		const { WINDOW_SCROLL, WINDOW_RESIZE } = this.props;
		window.addEventListener('load', () => WINDOW_RESIZE(getWindowWidth(), getWindowHeight()));
		window.addEventListener('resize', () => WINDOW_RESIZE(getWindowWidth(), getWindowHeight()));
		window.addEventListener('scroll', () => WINDOW_SCROLL(getScrollPosition()));
	}

	componentWillUnmount() {
		const { WINDOW_SCROLL, WINDOW_RESIZE } = this.props;
		window.removeEventListener('load', () => WINDOW_RESIZE(getWindowWidth(), getWindowHeight()));
		window.removeEventListener('resize', () => WINDOW_RESIZE(getWindowWidth(), getWindowHeight()));
		window.removeEventListener('scroll', () => WINDOW_SCROLL(getScrollPosition()));
	}

	render() {
		return (
			<Fragment>
				<Nav />
				<Header />
				<About />
				<Services />
				<Contact />
			</Fragment>
		);
	}
}


// <Client />
// <Projects />

Body.propTypes = {
	// windowHeight: PropTypes.number,
	// windowWidth: PropTypes.number,
	WINDOW_RESIZE: PropTypes.func,
	WINDOW_SCROLL: PropTypes.func,
};

const mapStateToProps = state => ({
	// windowHeight: state.windowHeight,
	// scrollTop: state.scrollTop,
});

const mapDispatchToProps = dispatch => (
	bindActionCreators({
		WINDOW_RESIZE,
		WINDOW_SCROLL,
	}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Body);
