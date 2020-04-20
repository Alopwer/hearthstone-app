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
						classValue={props.class}
						classes={props.metadata.classes}
						setClass={props.setClass}
						setClassName={props.setClassName}
						isLarge={props.isLarge}
						isSmall={props.isSmall}
						additionalFilterbars={props.additionalFilterbars}
						toggleAdditionalFilterbars={props.toggleAdditionalFilterbars}/>
				</div>
				<FilterbarAdditionalContainer />
			</div>
		</div>
	</IconContext.Provider>
};

export default Filterbar;
