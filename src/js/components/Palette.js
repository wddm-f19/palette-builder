import React from 'react';
import Swatch from 'components/Swatch'
import 'css/Palette.css'

const Palette = ({swatches}) => {

	const arSwatches = swatches.map(({r,g,b}, index) => <Swatch key={index} red={r} green={g} blue={b} />)

	return (
		<ul className="palette">
			{arSwatches}
		</ul>
	)
}

export default Palette
