import React from 'react';
import { connect } from 'react-redux';
import {
    resetManaCost,
    setManaCost,
    removeManaCost
} from '../../../../redux/requestReducer';
import withSizes from 'react-sizes';
import { compose } from 'redux';
import ManaCostSelect from './ManaCostSelect';
import ManaCostButtons from './ManaCostButtons';

const ManaCostContainer = (props) => {
    
    const onChangeManaCostSelect = (manaCost) => {
        props.resetManaCost()
        manaCost.value+'' && props.setManaCost(manaCost.value)
    }

    const onChangeManaCostButton = (value) => {
        if (!props.manaCost.includes(value)) {
            props.setManaCost(value)
        } else {
            props.removeManaCost(value)
        }
    }
    
    return props.isLarge 
        ? <ManaCostButtons manaCost={props.manaCost} onChangeManaCostButton={onChangeManaCostButton} />
        : <ManaCostSelect manaCost={props.manaCost} onChangeManaCostSelect={onChangeManaCostSelect}/>
}

const mapStateToProps = (state) => ({
    manaCost: state.requestReducer.options.manaCost
})

const mapSizesToProps = (sizes) => ({
    isLarge: sizes.width > 1300
})

export default compose(
    withSizes(mapSizesToProps),
    connect(mapStateToProps, {
        resetManaCost, 
        removeManaCost, 
        setManaCost
    })
)(ManaCostContainer)