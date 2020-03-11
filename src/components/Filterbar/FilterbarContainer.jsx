import React from 'react';
import { connect } from 'react-redux';
import Filterbar from './Filterbar';
import { toggleAdditionalFilterbars } from '../../redux/uiReducer';
import { setAttack, setHealth, setCardType, setClass, setRarity, setMinionType, setKeyword } from '../../redux/requestReducer';

const FilterbarContainer = props => {
    return (
        <Filterbar {...props} usedOptions={props.requestOptions} />
    );
};

const mapStateToProps = state => ({
    additionalFilterbars: state.uiReducer.additionalFilterbars,
    requestOptions: state.requestReducer.options,
    cardTypes: state.appReducer.metadata.types,
    classes: state.appReducer.metadata.classes,
    rarities: state.appReducer.metadata.rarities,
    minionTypes: state.appReducer.metadata.minionTypes,
    keywords: state.appReducer.metadata.keywords
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
