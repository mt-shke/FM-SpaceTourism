<details>
<summary>Path
</summary>

```
-design => set style var
-structure => think about how to implement components
-structure => html
-structure => react, set logic
-component => make it works, then style
-loop => .
```

</details>

<details>
<summary>grid-column, clampWithVw, :not , inset
</summary>

```css
    .grid-container > *:first-child {
        grid-column: 2;

.underline-indicators > [aria-selected="true"] {
color: hsl( var(--clr-white) / 1);

--gap: clamp(1.5rem, 5vw, 3.5rem);

margin-block-start:

.grid-container p:not([class]) {

--gap: min(6vw, 6rem);

    inset: 0 0 0 30%;


```

</details>

<details>
<summary>@supports css & backdrop-filter</summary>

```css
.nav > div {
	background: rgba(0, 0, 0, 0.9);
	/* firefox does not support backdrop-filter
    => set default bg */
}

@supports (backdrop-filter: blur(1rem)) {
	.nav > div {
		backdrop-filter: blur(1rem);
		background: rgba(255, 255, 255, 0.02);
		/* chrome does support backdrop-filter */
	}
}
```

</details>

<details>
<summary>Animation css react by grafikArt</summary>

```js
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
```

</details>

<details>
<summary>More complex anim
</summary>

```js
const VISIBLE = 1;
const HIDDEN = 2;
const ENTERING = 3;
const LEAVING = 4;

const Fade = ({ visible, children, duration = 1000 }) => {
	const childRef = useRef(children);
	const [state, setState] = useState(visible ? VISIBLE : HIDDEN);
	const className = state === VISIBLE ? "fade" : "fade out";

	if (visible) {
		childRef.current = children;
	}

	useEffect(() => {
		if (!visible) {
			setState(LEAVING);
		} else {
			setState((s) => (s === HIDDEN ? ENTERING : VISIBLE));
		}
	}, [visible]);

	useEffect(() => {
		if (state === LEAVING) {
			const timer = setTimeout(() => {
				setState(HIDDEN);
			}, 1000);
			return () => {
				clearTimeout(timer);
			};
		} else if (state === ENTERING) {
			// document.body.offsetHeight;
			setState(VISIBLE);
		}
	}, [state]);

	if (state === HIDDEN) {
		return null;
	}

	return <div className={className}>{childRef.current}</div>;
};
```

</details>

<details>
<summary>Conditionnal Responsive BreakPoints in React
</summary>

calling in main component

```js
const breakPoints = {
	mobile: "(max-width:560px)",
	tablet: "(min-width:561px) and (max-width:768px)",
	tablet: "(min-width:769x) and (max-width:1024px)",
	desktop: "(min-width:1024px)",
};

const MainComponent () => {
const [breakPoint, isBreakPoint] = useState();

	useEffect(() => {
		breakPointObserver(breakPoints, isBreakPoint);
	}, [breakPoint]);

	return (<ChildComponent breakPoint={breakPoint} />)

```

breakpoint functions

```js
function matchMediaQuery(breakPoints, setBreakPoint) {
	for (let key of Object.keys(breakPoints)) {
		if (window.matchMedia(`${breakPoints[key]}`).matches) {
			setBreakPoint(key);
		}
	}
}

export default function breakPointObserver(breakPoints, setBreakPoint) {
	matchMediaQuery(breakPoints, setBreakPoint);

	window.addEventListener("resize", () => {
		matchMediaQuery(breakPoints, setBreakPoint);
	});
}
```

</details>

<details>
<summary>:hover:after & centering :pseudo element
</summary>

```css
.explore {
	border-radius: 50%;
	aspect-ratio: 1;
	width: fit-content;
	padding: 1.2rem;
	margin: 0 auto;
	transition: 2s;
	position: relative;
	z-index: 55;
}

.explore:hover {
	transition: 2s ease-out;
	transform: scale(150%);
	cursor: pointer;
}

.explore:hover:after {
	transform: scale(180%);
	background-color: rgba(110, 110, 110, 0.452);
}

.explore:after {
	transition: 1.5s;
	content: "";
	width: 8rem;
	height: 8rem;
	margin-top: -4rem;
	margin-left: -4rem;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50% -50%);
	background-color: rgba(110, 110, 110, 0);
}
```

</details>

<details>
<summary>
li[aria-selected="true"], src={public url} in react
</summary>
```css

.slide li:hover {
background-color: rgba(117, 117, 117, 0.473);
cursor: pointer;
}
.slide li:active,
.slide li[aria-selected="true"] {
background-color: rgb(255, 255, 255);
color: black;
}

````

```js

import img
src require
src={/asset/...}
````

</details>
