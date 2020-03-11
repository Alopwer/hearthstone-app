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

const CardsFiltersInfoContainer = props => {
  const manaCostBar =
    props.requestOptions.manaCost.length !== 0 &&
    props.requestOptions.manaCost.map(mC => (
      <span key={mC} onClick={(e) => { e.stopPropagation() ;props.removeManaCost(mC)}}>
        {mC}{' '}
      </span>
    ));

  const { class: classValue, textFilter, attack, health, type, minionType, keyword, rarity } = props.requestOptions
  const filtersInfo = [
    {
      resetValue: props.setClass,
      valueInfo: classValue && classValue !== 'all' && classValue[0].toUpperCase() + classValue.slice(1)
    },
    {
      resetValue: props.resetManaCost,
      valueInfo: manaCostBar && <p>Mana : {manaCostBar}  x</p>
    },
    {
      resetValue: props.setTextFilter,
      valueInfo: textFilter
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
      valueInfo: type && <p>Card Type : {type}  x</p>
    },
    {
      resetValue: props.setRarity,
      valueInfo: rarity && <p>Rarity : {rarity}  x</p>
    },
    {
      resetValue: props.setMinionType,
      valueInfo: minionType && <p>Minion Type : {minionType}  x</p>
    },
    {
      resetValue: props.setKeyword,
      valueInfo: keyword && <p>Keywords : {keyword}  x</p>
    }
  ]
  const filterItems = filtersInfo.map((f, i) => <SimpleInfo key={i} resetValue={f.resetValue} valueInfo={f.valueInfo} />)

  const onChangeSort = (e) => {
    props.setOrderAndSort(e.target.value.split(','))
  }

  return <CardsFiltersInfo {...props} 
    manaCostBar={manaCostBar} 
    onChangeSort={onChangeSort} 
    filterItems={filterItems} 
  />;
};

const mapStateToProps = state => ({
  totalCards: state.cardsReducer.totalCards,
  requestOptions: state.requestReducer.options
});

export default connect(mapStateToProps, {
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
  setViewMode
})(CardsFiltersInfoContainer);
