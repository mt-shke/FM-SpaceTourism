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
<summary>
Others
</summary>
```css

.slide [aria-selected="true"] {
background-color: rgb(255, 255, 255);
}

````

```js

import img
src require
src={/asset/...}
````

</details>
