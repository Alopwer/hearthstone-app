import React from 'react';
import { SetsContainer, ManaCostContainer, SearchContainer } from './Filters';
import withSelectFilter from '../../hoc/withSelectFilter';
import SimpleFilter from './SimpleFitler';

const Filterbar = props => {
  return (
    <div>
      <div>
        <SetsContainer />
        {withSelectFilter({ value: props.class, setValue: props.setClass, options: props.classes })(SimpleFilter)}
        <ManaCostContainer />
        <SearchContainer />
        <button onClick={props.toggleAdditionalFilterbars}>Filters</button>
      </div>
      {
        props.additionalFilterbars &&
        <div>
          {withSelectFilter({ value: props.attack, setValue: props.setAttack, name: 'Attack' })(SimpleFilter)}
          {withSelectFilter({ value: props.health, setValue: props.setHealth, name: 'Health' })(SimpleFilter)}
          {withSelectFilter({ value: props.cardType, setValue: props.setCardType, name: 'Type', options: props.cardTypes })(SimpleFilter)}
          {withSelectFilter({ value: props.rarity, setValue: props.setRarity, name: 'Rarities', options: props.rarities })(SimpleFilter)}
          {withSelectFilter({ value: props.minionType, setValue: props.setMinionType, name: 'Minion Type', options: props.minionTypes })(SimpleFilter)}
          {withSelectFilter({ value: props.keyword, setValue: props.setKeyword, name: 'Keywords', options: props.keywords })(SimpleFilter)}
        </div>
      }
    </div>
  );
};

export default Filterbar;
