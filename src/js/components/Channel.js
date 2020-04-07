import React from 'react';
import 'css/Channel.css'

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

export default Channel
