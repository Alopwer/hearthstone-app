import React from 'react';
import CardsFiltersInfo from './CardsFiltersInfo';
import { connect } from 'react-redux';
import {
	setTextFilter,
	removeManaCost,
	setClass,
	resetManaCost,
	setAttack,
	setHealth,
	setCardType,
	setRarity,
	setMinionType,
	setKeyword,
	resetFilters,
	setViewMode
} from '../../../redux/requestReducer';
import SimpleInfo from './SimpleInfo'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux';

const CardsFiltersInfoContainer = props => {
	const { class: classValue, textFilter, attack, health, type, minionType, keyword, rarity, manaCost } = props.requestOptions
	const { className, typeName, rarityName, minionTypeName, keywordName, actualSetName } = props.nameList

	const manaCostBar = manaCost.length !== 0 && manaCost.sort((a, b) => a - b).join(', ').split(' ').map(mC => (
		<span key={mC} onClick={(e) => { e.stopPropagation(); props.removeManaCost(parseInt(mC)) }}>
			{`${mC}`}
		</span>
	));

	const filtersInfo = [
		{
			resetValue: props.setClass,
			valueInfo: classValue && <p>Class: {className} x</p>
		},
		{
			resetValue: props.resetManaCost,
			valueInfo: manaCost.length !== 0 && <p>Mana : {manaCostBar} x</p>
		},
		{
			resetValue: props.setTextFilter,
			valueInfo: textFilter && <p>{textFilter} x</p>
		},
		{
			resetValue: props.setAttack,
			valueInfo: attack + '' && <p>Attack : {attack}  x</p>
		},
		{
			resetValue: props.setHealth,
			valueInfo: health && <p>Health : {health}  x</p>
		},
		{
			resetValue: props.setCardType,
			valueInfo: type && <p>Card Type : {typeName}  x</p>
		},
		{
			resetValue: props.setRarity,
			valueInfo: rarity && <p>Rarity : {rarityName}  x</p>
		},
		{
			resetValue: props.setMinionType,
			valueInfo: minionType && <p>Minion Type : {minionTypeName}  x</p>
		},
		{
			resetValue: props.setKeyword,
			valueInfo: keyword && <p>Keywords : {keywordName}  x</p>
		}
	]
	const filterItems = filtersInfo.map((f, i) => <SimpleInfo key={i} resetValue={f.resetValue} valueInfo={f.valueInfo} />)

	return <CardsFiltersInfo {...props}
		filterItems={filterItems}
		actualSetName={actualSetName}
		additionalFilterbars={props.additionalFilterbars}
	/>;
};

const mapStateToProps = state => ({
	totalCards: state.cardsReducer.totalCards,
	requestOptions: state.requestReducer.options,
	nameList: state.staticInfoReducer.nameList,
	additionalFilterbars: state.uiReducer.additionalFilterbars
});

export default compose(
	withRouter,
	connect(mapStateToProps, {
		setTextFilter,
		removeManaCost,
		resetManaCost,
		setClass,
		setAttack,
		setHealth,
		setCardType,
		setRarity,
		setMinionType,
		setKeyword,
		resetFilters,
		setViewMode,
	})
)(CardsFiltersInfoContainer);
