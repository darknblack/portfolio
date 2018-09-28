import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaLaptop, FaChrome, FaMobileAlt } from 'react-icons/fa';

class Services extends Component {
	constructor(props) {
		super(props);
		this.canvas = React.createRef();
		this.drawTriangle = this.drawTriangle.bind(this);
	}

	componentDidMount() {
		console.log('<Services />');
	}

	componentDidUpdate() {
		const { windowHeight, windowWidth } = this.props;
		const tempH = windowHeight;
		const tempW = windowWidth;
		// this.drawTriangle(windowWidth, windowHeight);
	}

	drawTriangle(width, height) {
		const c = this.canvas.current;
		// alert(c);
		const ctx = c.getContext('2d');
		const domWidth = ctx.canvas.width;
		const domHeight = ctx.canvas.height;

		ctx.clearRect(0, 0, domWidth, domHeight);

		// Filled triangle
		ctx.beginPath();
		// ctx.moveTo(0, 0);
		// ctx.lineTo(domWidth, 40);
		// ctx.lineTo(domWidth, 0);
		ctx.moveTo(domWidth, domWidth);
		ctx.lineTo(0, domHeight);
		ctx.lineTo(domWidth, 0);
		ctx.fillStyle = 'red';
		// ctx.fillStyle = 'rgba(255,255,255, 1)';
		ctx.fill();
	}

	render() {
		const { windowHeight, windowWidth } = this.props;
		const style = { background: '#050505', color: '#fff' };
		const canvasStyle = { position: 'absolute' };

		return (
			<div id="services" className="wrp-xlg" style={style}>
				<canvas id="services-canvas" ref={this.canvas} width={windowWidth} height={windowHeight} style={canvasStyle}>
					Your browser does not support the HTML5 canvas tag.
				</canvas>
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
						<div className="col-3">
							<h2>1. Mobile App</h2>
							<div className="bigIcon">
								<FaMobileAlt />
							</div>
							<p>Android & IOS (React Native)</p>
						</div>
						<div className="col-3">
							<h2>2. Website</h2>
							<div className="bigIcon">
								<FaChrome />
							</div>
							<p>Supported by major browsers</p>
						</div>
						<div className="col-3">
							<h2>3. Desktop App</h2>
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
	windowHeight: PropTypes.number,
	windowWidth: PropTypes.number,
};

const mapStateToProps = state => ({
	windowHeight: state.windowHeight,
	windowWidth: state.windowWidth,
});

export default connect(mapStateToProps)(Services);
