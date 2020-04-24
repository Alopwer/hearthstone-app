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
import ClearFilterBtn from './ClearFilterBtn'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux';
import WithSizes from 'react-sizes';

const CardsFiltersInfoContainer = props => {
	const { class: classValue, textFilter, attack, health, type, minionType, keyword, rarity, manaCost } = props.requestOptions
	const { className, typeName, rarityName, minionTypeName, keywordName, actualSetName } = props.nameList

	const manaCostBar = manaCost.length !== 0 && manaCost.sort((a, b) => a - b)
		.join(', ')
		
	const filtersInfo = [
		{
			resetValue: props.setClass,
			valueInfo: classValue && `${className}`
		},
		{
			resetValue: props.resetManaCost,
			valueInfo: manaCost.length !== 0 && `Mana: ${manaCostBar}`
		},
		{
			resetValue: props.setTextFilter,
			valueInfo: textFilter && `${textFilter}`
		},
		{
			resetValue: props.setAttack,
			valueInfo: attack + '' && `Attack: ${attack}`
		},
		{
			resetValue: props.setHealth,
			valueInfo: health && `Health: ${health}`
		},
		{
			resetValue: props.setCardType,
			valueInfo: type && `${typeName}`
		},
		{
			resetValue: props.setRarity,
			valueInfo: rarity && `${rarityName}`
		},
		{
			resetValue: props.setMinionType,
			valueInfo: minionType && `${minionTypeName}`
		},
		{
			resetValue: props.setKeyword,
			valueInfo: keyword && `${keywordName}`
		}
	]
	const filterItems = filtersInfo.map((f, i) => <ClearFilterBtn key={i} resetValue={f.resetValue} valueInfo={f.valueInfo} />)

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


const mapSizesToProps = ({ width }) => ({
	isSmall: width < 992,
	isXSmall: width < 621
})

export default compose(
    WithSizes(mapSizesToProps), 
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
