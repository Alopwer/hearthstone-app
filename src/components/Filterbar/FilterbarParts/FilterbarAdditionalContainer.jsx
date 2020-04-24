import React from 'react';
import { connect } from 'react-redux';
import FilterbarAdditional from './FilterbarAdditional';
import { setAttack, setHealth, setCardType, setRarity, setMinionType, setKeyword } from '../../../redux/requestReducer';
import { setTypeName, setRarityName, setMinionTypeName, setKeywordName } from '../../../redux/staticInfoReducer';

const FilterbarAdditionalContainer = props => {
	return <FilterbarAdditional {...props}/>
};

const mapStateToProps = state => ({
    metadata: state.appReducer.metadata,
    attack: state.requestReducer.options.attack,
    health: state.requestReducer.options.health,
    type: state.requestReducer.options.type,
    rarity: state.requestReducer.options.rarity,
    minionType: state.requestReducer.options.minionType,
    keyword: state.requestReducer.options.keyword,
    types: state.appReducer.metadata.type,
    rarities: state.appReducer.metadata.rarity,
    minionTypes: state.appReducer.metadata.minionType,
    keywords: state.appReducer.metadata.keyword,
});

export default connect(mapStateToProps, {
    setAttack,
    setHealth,
    setCardType,
    setRarity,
    setMinionType,
    setKeyword,
    setTypeName,
    setRarityName,
    setMinionTypeName,
    setKeywordName,
})(FilterbarAdditionalContainer);
