import { Redirect, Route, Switch } from "react-router";
import DestinationModel from "./DestinationModel";

const Destination = (props) => {
	return (
		<Switch>
			<Route path="/destination/:id">
				<DestinationModel data={props.data} />
			</Route>
			<Route path="/destination">
				<Redirect to="./destination/moon" />
			</Route>
			<Route path="/destination/moon">
				<DestinationModel data={props.data} />
			</Route>
		</Switch>
	);
};

export default Destination;
