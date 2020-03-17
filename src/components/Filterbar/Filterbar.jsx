import React from 'react';
import { SetsContainer, ManaCostContainer, SearchContainer } from './Filters';
import withSelectFilter from '../../hoc/withSelectFilter';
import SimpleFilter from './SimpleFitler';

const Filterbar = props => {
	const { class: classValue, attack, health, type, rarity, minionType, keyword } = props
	const { types, classes, rarities, minionTypes, keywords } = props.metadata
	return <div>
		<div>
			<SetsContainer />
			{withSelectFilter({ value: classValue, setValue: props.setClass, name: 'Classes', options: classes })(SimpleFilter)}
			<ManaCostContainer />
			<SearchContainer />
			<button onClick={props.toggleAdditionalFilterbars}>Filters</button>
		</div>
		{
			props.additionalFilterbars &&
			<div>
				{withSelectFilter({ value: attack, setValue: props.setAttack, name: 'Attack' })(SimpleFilter)}
				{withSelectFilter({ value: health, setValue: props.setHealth, name: 'Health' })(SimpleFilter)}
				{withSelectFilter({ value: type, setValue: props.setCardType, name: 'Type', options: types })(SimpleFilter)}
				{withSelectFilter({ value: rarity, setValue: props.setRarity, name: 'Rarities', options: rarities })(SimpleFilter)}
				{withSelectFilter({ value: minionType, setValue: props.setMinionType, name: 'Minion Type', options: minionTypes })(SimpleFilter)}
				{withSelectFilter({ value: keyword, setValue: props.setKeyword, name: 'Keywords', options: keywords })(SimpleFilter)}
			</div>
		}
	</div>
};

export default Filterbar;
