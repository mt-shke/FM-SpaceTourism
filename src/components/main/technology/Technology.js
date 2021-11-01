import { Redirect, Route, Switch } from "react-router";
import TechnologyModel from "./TechnologyModel";

const Technology = (props) => {
	return (
		<Switch>
			<Route path="/technology/:id">
				<TechnologyModel data={props.data} breakPoint={props.breakPoint} />
			</Route>
			<Route path="/technology">
				<Redirect to="/technology/launch-vehicle" />
			</Route>
			<Route path="/technology/launch-vehicle">
				<TechnologyModel data={props.data} breakPoint={props.breakPoint} />
			</Route>
			<Route path="/technology/">
				<Redirect to="/technology/launch-vehicle" />
			</Route>
		</Switch>
	);
};

export default Technology;
