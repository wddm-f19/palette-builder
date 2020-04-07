import React from 'react';
import ReactDOM from 'react-dom';
import Palette from 'components/Palette';
import 'css/index.css';
import 'css/reset.css';
import 'css/App.css';

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
