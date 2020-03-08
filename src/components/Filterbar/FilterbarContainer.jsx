import React from 'react';
import { connect } from 'react-redux';
import Filterbar from './Filterbar';
import { toggleAdditionalFilterbars } from '../../redux/uiReducer';
import { setAttack, setHealth, setCardType, setClass, setRarity, setMinionType, setKeyword } from '../../redux/requestReducer';

const FilterbarContainer = props => {
    return (
        <Filterbar {...props}/>
    );
};

const mapStateToProps = state => ({
    additionalFilterbars: state.uiReducer.additionalFilterbars,
    attack: state.requestReducer.options.attack,
    health: state.requestReducer.options.health,
    cardType: state.requestReducer.options.cardType,
    cardTypes: state.appReducer.types,
    class: state.requestReducer.options.class,
    classes: state.appReducer.classes,
    rarity: state.requestReducer.options.rarity,
    rarities: state.appReducer.rarities,
    minionType: state.requestReducer.options.minionType,
    minionTypes: state.appReducer.minionTypes,
    keyword: state.requestReducer.options.keyword,
    keywords: state.appReducer.keywords
});

export default connect(mapStateToProps, {
    toggleAdditionalFilterbars,
    setAttack,
    setHealth,
    setCardType,
    setClass,
    setRarity,
    setMinionType,
    setKeyword
})(FilterbarContainer);
