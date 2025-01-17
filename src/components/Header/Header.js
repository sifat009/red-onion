import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../../images/logo2.png";

const Header = () => {
	return (
		<header className="ho-header sticky-top">
			<nav className="navbar sticky-top navbar-expand-md navbar-light bg-light">
				<Link to="/" className="navbar-brand">
					<div className="logo">
						<img src={logo2} alt="logo dark" />
					</div>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
						<li className="nav-item active">
							<Link to="/order" className="nav-link">
								<i className="fas fa-shopping-cart"></i>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/login" className="nav-link">
								Login
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/login" className="btn btn-danger btn-round btn-round">
								Sign up
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
