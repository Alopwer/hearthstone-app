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
  setKeyword
} from '../../../redux/requestReducer';

const CardsFiltersInfoContainer = props => {
  const manaCostBar =
    props.requestOptions.manaCost.length !== 0 &&
    props.requestOptions.manaCost.map(mC => (
      <span key={mC} onClick={() => props.removeManaCost(mC)}>
        {mC}{' '}
      </span>
    ));

  return <CardsFiltersInfo {...props} manaCostBar={manaCostBar} />;
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
  setKeyword
})(CardsFiltersInfoContainer);
