import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import bg from '../images/bg1.jpg';

class Header extends Component {
	constructor(props) {
		super(props);
		this.canvas = React.createRef();
		this.drawTriangle = this.drawTriangle.bind(this);
	}

	componentDidUpdate() {
		this.drawTriangle();
	}

	drawTriangle() {
		const ctx = this.canvas.current.getContext('2d');
		const w = ctx.canvas.width;
		const h = ctx.canvas.height;
		ctx.clearRect(0, 0, w, h);

		// Filled triangle
		ctx.beginPath();
		ctx.moveTo(w, 0);
		ctx.lineTo(0, h);
		ctx.lineTo(w, h);
		// ctx.fillStyle = 'red';
		ctx.fillStyle = 'rgba(255,255,255, .05)';
		ctx.fill();
	}

	render() {
		const { windowHeight, windowWidth } = this.props;

		const style = {
			height: windowHeight + 'px',
			background: `linear-gradient(rgba(3, 3, 3, 0.8), rgba(3, 3, 3, 0.8)), url(${bg})`,
		};

		const canvasStyle = { position: 'absolute', zIndex: '1' };

		return (
			<div className="header">
				<div className="slide slide-bg wrp-bg-fixed" style={style}>
					<canvas id="header-canvas" ref={this.canvas} width={windowWidth} height={windowHeight} style={canvasStyle}>
						Your browser does not support the HTML5 canvas tag.
					</canvas>
					<div className="slide-info">
						<h2>IAN ODERON</h2>
						<p>FRONT END &middot; BACK END &middot; ANDROID DEVELOPER </p>
					</div>
				</div>
			</div>
		);
	}
}

Header.propTypes = {
	windowHeight: PropTypes.number,
	windowWidth: PropTypes.number,
};

const mapStateToProps = state => ({
	header: state.header,
	windowHeight: state.windowHeight,
	windowWidth: state.windowWidth,
});

export default connect(mapStateToProps)(Header);
