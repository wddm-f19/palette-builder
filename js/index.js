const Channel = ({color}) => {

	let clickBtn = (event) => {
		console.log('Hello world!')
	}

	return (
		<div className="channel">
			<button type="button" className="btn up" onClick={clickBtn}>+</button>
			<input type="text" className="txt" defaultValue={color} />
			<button type="button" className="btn down">-</button>
		</div>
	)
}


const Swatch = ({red, green, blue}) => {

	let css = {
		backgroundColor: `rgb(${red}, ${green}, ${blue})`
	}

	return (
		<li className="swatch" style={css}>
			<span>rgb(</span>
			<Channel color={red} />
			<Channel color={green} />
			<Channel color={blue} />
			<span>);</span>
		</li>
	)
}


const Palette = ({swatches}) => {

	const arSwatches = swatches.map(({r,g,b}, index) => <Swatch key={index} red={r} green={g} blue={b} />)

	return (
		<ul className="palette">
			{arSwatches}
		</ul>
	)
}


const App = () => {

	// Eventually this will be loaded from a endpoint
	const palettes = [
		[
			{r: 255, g: 255, b: 0},
			{r: 0, g: 255, b: 255},
			{r: 255, g: 0, b: 255},
		]
		// ,[
		// 	{r: 255, g: 0, b: 0},
		// 	{r: 0, g: 255, b: 0},
		// 	{r: 0, g: 0, b: 255},
		// ]
	]

	const arPalettes = palettes.map((palette, index) => <Palette key={index} swatches={palette} />)


	return (
		<main className="app" id="app">
			{arPalettes}
		</main>
	)
}


ReactDOM.render(<App />, document.getElementById('root'));
