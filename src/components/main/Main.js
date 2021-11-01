import { Redirect, Switch, Route } from "react-router";
import { Fragment, useEffect, useState } from "react";
import Home from "./Home";
import Destination from "./destination/Destination";
import Crew from "./crew/Crew";
import Technology from "./technology/Technology";
import dataJson from "../../data.json";
import Header from "./header/Header";
import breakPointObserver from "../helper/breakPointObserver";

const breakPoints = {
	mobile: "(max-width:560px)",
	tablet: "(min-width:560px) and (max-width:768px)",
	laptop: "(min-width:769px)",
	// laptop: "(min-width:769px) and (max-width:1024px)",
	// desktop: "(min-width:1024px)",
};

const Main = () => {
	const [modal, setModal] = useState(false);
	const [breakPoint, isBreakPoint] = useState();

	useEffect(() => {
		breakPointObserver(breakPoints, isBreakPoint);
	}, [breakPoint]);

	const modalHandler = () => {
		setModal((prev) => !prev);
	};

	const data = dataJson;

	return (
		<Fragment>
			<Header modal={modal} onSetModal={modalHandler} breakPoint={breakPoint} />
			<main>
				<Switch>
					<Route path="/" exact>
						<Redirect to="/home" />
					</Route>
					<Route path="/home">
						<Home breakPoint={breakPoint} />
					</Route>
					<Route path="/destination">
						<Destination data={data.destinations} />
					</Route>
					<Route path="/crew">
						<Crew data={data.crew} />
					</Route>
					<Route path="/technology">
						<Technology data={data.technology} breakPoint={breakPoint} />
					</Route>
				</Switch>
			</main>
		</Fragment>
	);
};

export default Main;
