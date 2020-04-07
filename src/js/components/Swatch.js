import React from 'react';
import Channel from 'components/Channel'
import 'css/Swatch.css'

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

export default Swatch
