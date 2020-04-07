import React, {useState} from 'react';
import 'css/Channel.css'

const Channel = ({color, onRgbUpdate}) => {

	console.log(`RENDERED THE CHANNEL COMPONENT`)


	// DEFINING AND UPDATING STATE VARIABLES

	// Taking the value of color, assigning to a state variable named: rgb
	//let [rgb, setRgb] = useState(color)
	let rgb = color


	const updateValue = (value) => {
		// setRgb(value)
		if (value > 255)
			value = 255
		else if (value < 0 || !value)
			value = 0

		onRgbUpdate(value)  // setR(value), or setG(value), or setB(value)
	}


	return (
		<div className="channel">
			<button type="button" className="btn up" onClick={(event) => updateValue(rgb + 1)}>+</button>
			<input type="text" className="txt" value={rgb} onChange={(event) => updateValue(parseInt(event.target.value))} />
			{/* <div className="txt">{rgb}</div> */}
			<button type="button" className="btn down" onClick={(event) => updateValue(rgb - 1)}>-</button>
		</div>
	)
}

export default Channel
