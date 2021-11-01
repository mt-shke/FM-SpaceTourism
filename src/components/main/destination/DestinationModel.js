import { useHistory, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import css from "./DestinationModel.module.css";

const DestinationModel = (props) => {
	const { id } = useParams();
	const history = useHistory();
	const destination = props.data.find((dest) => dest.name.toLowerCase() === id);
	if (destination === undefined) {
		history.push("/home");
		return null;
	}
	const { description, distance, name, travel } = destination;
	const destinationsName = Array.from(
		props.data.map((dest) => {
			return dest.name.toLowerCase();
		})
	);

	const header = (
		<header className="grid">
			<h1 className=" fs-300 uppercase text-light letter-spacing-3">
				<span className="text-grey"> 01 </span> Pick your destination
			</h1>
			<div className={`${css.pic} bg-center-cover-nr container`}>
				<img className="wh100" src={`/assets/destination/image-${id}.webp`} alt={id} />
			</div>
		</header>
	);

	const list = (
		<ul className="container flex uppercase">
			{destinationsName.map((destinationName) => (
				<li key={destinationName}>
					<NavLink activeClassName={css.activeLink} to={`/destination/${destinationName}`}>
						{destinationName}
					</NavLink>
				</li>
			))}
		</ul>
	);

	const main = (
		<main className="container grid">
			<h1 className="fs-800 ff-serif uppercase">{name}</h1>
			<p className="text-grey fs-400">{description}</p>
		</main>
	);

	const footer = (
		<footer className="flex uppercase text-light">
			<div>
				<h3 className="fs-300 text-grey">Avg. distance</h3>
				<span className="fs-500 text-light ff-serif">{distance}</span>
			</div>
			<div>
				<h3 className="fs-300 text-grey">Est. travel time</h3>
				<span className="fs-500 text-light ff-serif">{travel}</span>
			</div>
		</footer>
	);

	return (
		<article className={`${css.destinationModel} bg-center-cover-nr`}>
			<div className={`${css.container} grid`}>
				{header}
				{list}
				{main}
				<hr className="bg-light" />
				{footer}
			</div>
		</article>
	);
};

export default DestinationModel;
