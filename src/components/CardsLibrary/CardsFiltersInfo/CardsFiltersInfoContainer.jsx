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
	setOrderAndSort,
	resetFilters,
	setViewMode
} from '../../../redux/requestReducer';
import SimpleInfo from './SimpleInfo'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux';

const CardsFiltersInfoContainer = props => {
	const { class: classValue, textFilter, attack, health, type, minionType, keyword, rarity, manaCost } = props.requestOptions
	const { classes, types, rarities, minionTypes, keywords } = props.metadata

	const manaCostBar = manaCost.length !== 0 && manaCost.map(mC => (
		<span key={mC} onClick={(e) => { e.stopPropagation(); props.removeManaCost(mC) }}>
			{mC}{' '}
		</span>
	));

	const filtersInfo = [
		{
			resetValue: props.setClass,
			valueInfo: classValue && classValue !== 'all' && <p>Class: {classes.find(c => c.slug === classValue).name} x</p>
		},
		{
			resetValue: props.resetManaCost,
			valueInfo: manaCostBar && <p>Mana : {manaCostBar} x</p>
		},
		{
			resetValue: props.setTextFilter,
			valueInfo: textFilter && <p>{textFilter} x</p>
		},
		{
			resetValue: props.setAttack,
			valueInfo: attack && <p>Attack : {attack}  x</p>
		},
		{
			resetValue: props.setHealth,
			valueInfo: health && <p>Health : {health}  x</p>
		},
		{
			resetValue: props.setCardType,
			valueInfo: type && <p>Card Type : {types.find(t => t.slug === type).name}  x</p>
		},
		{
			resetValue: props.setRarity,
			valueInfo: rarity && <p>Rarity : {rarities.find(r => r.slug === rarity).name}  x</p>
		},
		{
			resetValue: props.setMinionType,
			valueInfo: minionType && <p>Minion Type : {minionTypes.find(mT => mT.slug === minionType).name}  x</p>
		},
		{
			resetValue: props.setKeyword,
			valueInfo: keyword && <p>Keywords : {keywords.find(km => km.slug === keyword).name}  x</p>
		}
	]
	const filterItems = filtersInfo.map((f, i) => <SimpleInfo key={i} resetValue={f.resetValue} valueInfo={f.valueInfo} />)

	const onChangeSort = (e) => {
		props.setOrderAndSort(e.target.value.split(','))
	}

	return <CardsFiltersInfo {...props}
		onChangeSort={onChangeSort}
		filterItems={filterItems}
		orderAndSort={props.orderAndSort}
	/>;
};

const mapStateToProps = state => ({
	totalCards: state.cardsReducer.totalCards,
	requestOptions: state.requestReducer.options,
	metadata: state.appReducer.metadata,
	orderAndSort: state.staticInfoReducer.orderAndSort,
	actualSetName: state.staticInfoReducer.actualSetName
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
		setOrderAndSort,
		resetFilters,
		setViewMode,
	})
)(CardsFiltersInfoContainer);
