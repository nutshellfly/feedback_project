import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a className="left brand-logo" href="/">FeedMeBack</a>
					<ul id="nav-mobile" className="right">
						<li> <a href="/auth/google">login with google</a> </li>
					</ul>
				</div>
			</nav>
		);
	}

}

export default Header;