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
    
    const onChangeManaCostSelect = (e) => {
        props.resetManaCost()
        props.setManaCost(e.target.value)
    }

    const onChangeManaCostButton = (e) => {
        if (!props.manaCost.includes(e.target.value)) {
            props.setManaCost(e.target.value)
        } else {
            props.removeManaCost(e.target.value)
        }
    }
    
    return props.isLarge 
        ? <ManaCostButtons onChangeManaCostButton={onChangeManaCostButton} />
        : <ManaCostSelect manaCost={props.manaCost} onChangeManaCostSelect={onChangeManaCostSelect}/> 
}

const mapStateToProps = (state) => ({
    manaCost: state.requestReducer.options.manaCost
})

const mapSizesToProps = (sizes) => ({
    isLarge: sizes.width > 1200
})

export default compose(
    withSizes(mapSizesToProps),
    connect(mapStateToProps, {
        resetManaCost, 
        removeManaCost, 
        setManaCost
    })
)(ManaCostContainer)