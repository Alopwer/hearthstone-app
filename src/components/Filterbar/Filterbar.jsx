import React from 'react';
import s from './Filterbar.module.scss';
import FilterbarTop from './FilterbarParts/FilterbarTop';
import FilterbarAdditionalContainer from './FilterbarParts/FilterbarAdditionalContainer'
import { IconContext } from 'react-icons'

const Filterbar = props => {
	return <IconContext.Provider value={{className: s['react-icons']}}>
		<div className={s['filterbar']}>
			<div className='container'>
				<div className={s['filterbar-main']}>
					<FilterbarTop
						isLarge={props.isLarge}
						isSmall={props.isSmall}
						additionalFilterbars={props.additionalFilterbars}
						toggleAdditionalFilterbars={props.toggleAdditionalFilterbars}/>
				</div>
				<FilterbarAdditionalContainer isSmall={props.isSmall} 
					additionalFilterbars={props.additionalFilterbars}
					toggleAdditionalFilterbars={props.toggleAdditionalFilterbars}/>
			</div>
		</div>
	</IconContext.Provider>
};

export default Filterbar;
