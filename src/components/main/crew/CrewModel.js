import { useHistory, useParams } from "react-router";
import css from "./CrewModel.module.css";

const CrewModel = (props) => {
	const history = useHistory();
	const { id } = useParams();
	const crew = props.data;
	const joinAndTlc = (name) => name.replace(" ", "-").toLowerCase();
	const team = crew.map((cr) => cr.name).map((name) => joinAndTlc(name));
	const memberIndex = team.indexOf(id);

	if (memberIndex < 0) {
		history.push("/home");
		return null;
	}

	const { name, bio, role } = crew[memberIndex];

	const sliderHandler = (event) => {
		const id = event.target.id;
		const name = joinAndTlc(crew[id].name);
		history.push(`/crew/${name}`);
	};

	return (
		<article className={`${css.crew}`}>
			<div className={css.container}>
				<h1 className=" fs-300 uppercase text-light letter-spacing-3">
					<span className="text-ldark">02</span> Meet your crew
				</h1>
				<div className="container__img">
					<img src={`/assets/crew/image-${id}.webp`} alt={name} />
					<hr className="bg-light" />
				</div>
				<ul className={`${css.slide} flex slide`}>
					{crew.map((cr) => (
						<li
							key={crew.indexOf(cr)}
							id={crew.indexOf(cr)}
							aria-selected={memberIndex === crew.indexOf(cr) ? "true" : "false"}
							onClick={sliderHandler}
						></li>
					))}
				</ul>
				<article className="flex flex-col">
					<h2 className="fs-400 ff-serif text-grey uppercase">{role}</h2>
					<h1 className="ff-serif fs-500 text-light uppercase">{name}</h1>
					<p className="text-grey">{bio}</p>
				</article>
			</div>
		</article>
	);
};

export default CrewModel;
