import { useEffect, useState } from "react";
import "./Fade.css";

const Fade = ({ visible, children }) => {
	const [showChildren, setShowChildren] = useState(visible);

	useEffect(() => {
		if (visible) {
			setShowChildren(true);
		} else {
			const timer = setTimeout(() => {
				setShowChildren(false);
			}, 1000);
			return () => {
				clearTimeout(timer);
			};
		}
	}, [visible]);

	let className = "fade";
	if (!visible) {
		className += " out";
	}

	return <div className={className}>{showChildren && children}</div>;
};

export default Fade;
