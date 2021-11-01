import css from "./App.module.css";
import Main from "./components/main/Main";

function App() {
	return (
		<div className={`${css.app} ff-sans-normal fs-400 text-white bg-dark bg-center-cover-nr`}>
			<Main />
		</div>
	);
}

export default App;
