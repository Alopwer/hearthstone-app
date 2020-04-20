import React from 'react';
import withSelectFilter from '../../../hoc/withSelectFilter';
import s from '../Filterbar.module.scss';
import { GiSwordWound } from 'react-icons/gi'
import { GiWaterDrop } from 'react-icons/gi'

const FilterbarAdditional = props => {
	const { attack, health, type, rarity, minionType, keyword } = props
	const { types, rarities, minionTypes, keywords } = props.metadata

	return <div className={s[`filterbar-additional${props.additionalFilterbars ? '_active' : ''}`]}> 
        {withSelectFilter(attack, props.setAttack, 'Attack', null, null, <GiSwordWound />)}
        {withSelectFilter(health, props.setHealth, 'Health', null, null, <GiWaterDrop />)}
        {withSelectFilter(type, props.setCardType, 'Type', types, props.setTypeName)}
        {withSelectFilter(rarity, props.setRarity, 'Rarities', rarities, props.setRarityName)}
        {withSelectFilter(minionType, props.setMinionType, 'Minion Type', minionTypes, props.setMinionTypeName)}
        {withSelectFilter(keyword, props.setKeyword, 'Keywords', keywords, props.setKeywordName)}
    </div>
};

export default FilterbarAdditional;
