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
  const { class: classValue, textFilter, attack, health, type, minionType, keyword, rarity, manaCost } = props.requestOptions

  const manaCostBar = manaCost.length !== 0 && manaCost.map(mC => (
    <span key={mC} onClick={(e) => { e.stopPropagation(); props.removeManaCost(mC) }}>
      {mC}{' '}
    </span>
  ));

  const filtersInfo = [
    {
      resetValue: props.setClass,
      valueInfo: classValue && classValue !== 'all' && <p>Class: {classValue[0].toUpperCase() + classValue.slice(1)} x</p>
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
      valueInfo: type && <p>Card Type : {type[0].toUpperCase() + type.slice(1)}  x</p>
    },
    {
      resetValue: props.setRarity,
      valueInfo: rarity && <p>Rarity : {rarity[0].toUpperCase() + rarity.slice(1)}  x</p>
    },
    {
      resetValue: props.setMinionType,
      valueInfo: minionType && <p>Minion Type : {minionType[0].toUpperCase() + minionType.slice(1)}  x</p>
    },
    {
      resetValue: props.setKeyword,
      valueInfo: keyword && <p>Keywords : {props.keywordsMetadata.find(km => km.slug === keyword).name}  x</p>
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
  keywordsMetadata: state.appReducer.metadata.keywords,
  orderAndSort: state.staticInfoReducer.orderAndSort
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
  setViewMode,
})(CardsFiltersInfoContainer);
