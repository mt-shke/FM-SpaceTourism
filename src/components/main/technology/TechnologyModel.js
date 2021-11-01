import { useHistory, useParams } from "react-router";
import css from "./Technology.module.css";

const TechnologyModel = (props) => {
	const history = useHistory();
	const { id } = useParams();
	const data = props.data;
	const joinAndTlc = (name) => name.replace(" ", "-").toLowerCase();
	const techs = data.map((tec) => tec.name).map((name) => joinAndTlc(name));
	const techIndex = techs.indexOf(id);

	if (techIndex < 0) {
		history.push("/home");
		return null;
	}
	const { name, description } = data[techIndex];

	const laptop = props.breakPoint === ("laptop" || "desktop");

	const sliderHandler = (event) => {
		const id = event.target.id;
		const name = joinAndTlc(data[id].name);
		history.push(`/technology/${name}`);
	};

	return (
		<article className={`${css.technology} bg-center-cover-nr`}>
			<div className={css.container}>
				<h1 className="fs-300 uppercase text-light letter-spacing-3">
					<span className="text-ldark">03</span> Space Launch 101
				</h1>
				<div className={css.container__img}>
					<img src={`/assets/technology/image-${id}-${laptop ? "portrait" : "landscape"}.jpg`} alt={name} />
				</div>

				<ul className={`${css.slide} flex fs-300`}>
					{data.map((tec) => (
						<li
							key={data.indexOf(tec)}
							id={data.indexOf(tec)}
							aria-selected={techIndex === data.indexOf(tec) ? "true" : "false"}
							onClick={sliderHandler}
						>
							{data.indexOf(tec) + 1}
						</li>
					))}
				</ul>
				<div className={`${css.container__infos} grid wh100 container`}>
					<h3 className="uppercase fs-400 text-light">The terminology...</h3>
					<h1 className="uppercase ff-serif fs-600">{name}</h1>
					<p className="fs-400 text-grey">{description}</p>
				</div>
			</div>
		</article>
	);
};

export default TechnologyModel;
