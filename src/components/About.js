import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class About extends Component {
	componentDidMount() {
		console.log('<About />');
	}

	render() {
		const { windowHeight } = this.props;

		return (
			<div id="about" className="wrp-xlg">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-7">
							<h2>ABOUT ME</h2>
							<p>Hi! I{"'"}m Ian Ishmael Oderon, 20 years old, a proficient full-stack developer based in Manila, Philippines. I specialize in creating responsive and professional looking website using the latest technologies such as HTML5, CSS3, JS and PHP7.
							</p>
							<p>I was 14 years old when I began developing and hosting my own websites and templates in Weebly.com, which is a a drag-and-drop website builder similar to Wiz.com. Slowly, I realized that drag-and-drop is not for me and so, I decided to jump from Weebly to Blogger.com.
							</p>
							<p>Back then, I only know CSS and HTML so I started branching out my skills by learning Javascript. It was kind of challenging at first but got the hang of it eventually and is now my favorite programming language.
							</p>
							<p>It was two years ago when I started working as a freelance at <a href="http://fiverr.com">Fiverr.com</a>. Doing projects for various person suddenly become part of my everyday life.
							</p>
						</div>
						<div className="col-5">
						</div>
					</div>
				</div>
			</div>
		);
	}
}

About.propTypes = {
	windowHeight: PropTypes.number,
};

const mapStateToProps = state => ({
	windowHeight: state.windowHeight,
});

export default connect(mapStateToProps)(About);
