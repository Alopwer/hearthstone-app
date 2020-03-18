import React from 'react';
import { connect } from 'react-redux';
import Filterbar from './Filterbar';
import { toggleAdditionalFilterbars } from '../../redux/uiReducer';
import { setAttack, setHealth, setCardType, setClass, setRarity, setMinionType, setKeyword } from '../../redux/requestReducer';
import { setClassName, setTypeName, setRarityName, setMinionTypeName, setKeywordName } from '../../redux/staticInfoReducer';

const FilterbarContainer = props => {
    return (
        <Filterbar {...props} />
    );
};

const mapStateToProps = state => ({
    additionalFilterbars: state.uiReducer.additionalFilterbars,
    requestOptions: state.requestReducer.options,
    metadata: state.appReducer.metadata,
    class: state.requestReducer.options.class,
    attack: state.requestReducer.options.attack,
    health: state.requestReducer.options.health,
    type: state.requestReducer.options.type,
    rarity: state.requestReducer.options.rarity,
    minionType: state.requestReducer.options.minionType,
    keyword: state.requestReducer.options.keyword,
});

export default connect(mapStateToProps, {
    toggleAdditionalFilterbars,
    setAttack,
    setHealth,
    setCardType,
    setClass,
    setRarity,
    setMinionType,
    setKeyword,
    setClassName,
    setTypeName,
    setRarityName,
    setMinionTypeName,
    setKeywordName,
})(FilterbarContainer);
