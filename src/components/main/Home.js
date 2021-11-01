import { useHistory } from "react-router";
import css from "./Home.module.css";

const Home = () => {
	const history = useHistory();

	const locationHandler = () => {
		history.replace("/destination");
	};

	return (
		<article className={`${css.home} bg-center-cover-nr`}>
			<div className={`${css.container} grid ff-sans-normal wh100`}>
				<h1 className="grid fs-300 uppercase text-grey letter-spacing-3">
					So, you want to travel to
					<br />
					<span className="fs-900 ff-serif text-white letter-spacing-1">Space</span>
				</h1>

				<p className="fs-300 text-light letter-spacing-3">
					Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not
					hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this
					world experience!
				</p>

				<div
					className={`${css.explore} grid uppercase fs-700 ff-serif bg-white text-dark`}
					onClick={locationHandler}
				>
					Explore
				</div>
			</div>
		</article>
	);
};

export default Home;
