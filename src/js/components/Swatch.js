import React, {useState} from 'react';
import Channel from 'components/Channel'
import 'css/Swatch.css'

const Swatch = ({red, green, blue}) => {

	console.log(`RENDERED THE SWATCH COMPONENT`)

	const [r, setR] = useState(red)
	const [g, setG] = useState(green)
	const [b, setB] = useState(blue)

	let css = {
		backgroundColor: `rgb(${r}, ${g}, ${b})`
	}

	return (
		<li className="swatch" style={css}>
			<span>rgb(</span>
			<Channel color={r} onRgbUpdate={setR} />
			<Channel color={g} onRgbUpdate={setG} />
			<Channel color={b} onRgbUpdate={setB} />
			<span>);</span>
		</li>
	)
}

export default Swatch
