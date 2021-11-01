import { useHistory, NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = (props) => {
	const mobile = props.breakPoint === "mobile";
	const laptop = props.breakPoint === "laptop" || props.breakPoint === "desktop";
	const history = useHistory();

	// Icon logic
	const logoHandler = () => {
		history.push("/home");
	};

	const hamburgerHandler = (event) => {
		const { modal } = props;
		const target = event.target.classList;
		!modal && props.onSetModal();
		if (modal) {
			if (target.contains("link") || target.contains("hamburger")) {
				props.onSetModal();
			}
		}
	};

	// Renders

	const nav = (
		<nav className={`${css.nav}`} onClick={hamburgerHandler}>
			<div className="overlay wh100 bg-light"></div>
			<ul className="fs-400 uppercase text-white">
				<li>
					<NavLink className="link" activeClassName={css.active} to="/home">
						00 Home
					</NavLink>
				</li>
				<li>
					<NavLink className="link" activeClassName={css.active} to="/destination">
						01 Destination
					</NavLink>
				</li>
				<li>
					<NavLink className="link" activeClassName={css.active} to="/crew">
						02 Crew
					</NavLink>
				</li>
				<li>
					<NavLink className="link" activeClassName={css.active} to="/technology">
						03 Technology
					</NavLink>
				</li>
			</ul>
		</nav>
	);

	const navIcon = (
		<div
			className={`${!props.modal ? css.hamburger : css.close} ${css.icon} hamburger bg-center-cover-nr`}
			onClick={hamburgerHandler}
		></div>
	);

	return (
		<header className={`${css.header} flex`}>
			<div className={`${css.logo} bg-center-cover-nr`} onClick={logoHandler}></div>
			{laptop && <hr />}
			{mobile && navIcon}
			{mobile && props.modal && nav}
			{!mobile && nav}
		</header>
	);
};

export default Header;
