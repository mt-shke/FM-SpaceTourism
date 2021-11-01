import { Switch, Route, Redirect } from "react-router";
import CrewModel from "./CrewModel";

const Crew = (props) => {
	return (
		<Switch>
			<Route path="/crew/:id">
				<CrewModel data={props.data} />
			</Route>
			<Route path="/crew">
				<Redirect to="/crew/douglas-hurley" />
			</Route>
			<Route path="/crew/douglas-hurley">
				<CrewModel data={props.data} />
			</Route>
		</Switch>
	);
};

export default Crew;
