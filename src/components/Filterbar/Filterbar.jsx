import React from 'react';
import { SetsContainer, ManaCostContainer, SearchContainer } from './Filters';
import withSelectFilter from '../../hoc/withSelectFilter';
import s from './Filterbar.module.scss';
import { TiSpiral } from 'react-icons/ti'
import { GiSwordWound } from 'react-icons/gi'
import { GiWaterDrop } from 'react-icons/gi'

const Filterbar = props => {
	const { class: classValue, attack, health, type, rarity, minionType, keyword } = props
	const { types, classes, rarities, minionTypes, keywords } = props.metadata
	
	return <div className={s.filterbar}>
		<div className='container'>
			<div className={s['filterbar-main']}>
				<div className={s['filterbar-top']}>
					<SetsContainer />
					<div className={s['filterbar-top__element']}>
						{withSelectFilter(classValue, props.setClass, 'Classes', classes, props.setClassName, <TiSpiral />)}
					</div>
					<ManaCostContainer />
					<SearchContainer />
				</div>
				<button className={s.toggleButton} onClick={props.toggleAdditionalFilterbars}>Filters</button>
			</div>
			{
				props.additionalFilterbars &&
				<div className={s['filterbar-additional']}> 
					{withSelectFilter(attack, props.setAttack, 'Attack', null, null, <GiSwordWound />)}
					{withSelectFilter(health, props.setHealth, 'Health', null, null, <GiWaterDrop />)}
					{withSelectFilter(type, props.setCardType, 'Type', types, props.setTypeName)}
					{withSelectFilter(rarity, props.setRarity, 'Rarities', rarities, props.setRarityName)}
					{withSelectFilter(minionType, props.setMinionType, 'Minion Type', minionTypes, props.setMinionTypeName)}
					{withSelectFilter(keyword, props.setKeyword, 'Keywords', keywords, props.setKeywordName)}
				</div>
			}
		</div>
	</div>
};

export default Filterbar;
