import React from 'react';
import { connect } from 'react-redux';
import ManaCost from './ManaCost';
import {
    resetManaCost,
    setManaCost,
    removeManaCost
} from '../../../../redux/requestReducer';

const ManaCostContainer = (props) => {

    const manaCostItems = []
    manaCostItems.push(<option key={11} value={''}>All cost</option>)
    for (let i = 0; i <= 10; i++) {
        manaCostItems.push(
            <option key={i} value={i}>{ i }</option>
        )
    }
    
    // for (let i = 0; i <= 10; i++) {
    //     manaCostItems.push(
    //         <button key={i} value={i}>{ i }</button>
    //     )
    // }
    
    const onChangeManaCostSelect = (e) => {
        props.resetManaCost()
        props.setManaCost(e.target.value)
    }

    const onChangeManaCostButton = (e) => {
        if (!props.manaCost.includes(e.target.value)) {
            // if (!e.target.value) {
            //     props.resetManaCost()
            // } else {
                props.setManaCost(e.target.value)
            // }
        } else {
            props.removeManaCost(e.target.value)
        }
    }
    
    return <ManaCost manaCost={props.manaCost} 
        manaCostItems={manaCostItems} 
        onChangeManaCostButton={onChangeManaCostButton} 
        onChangeManaCostSelect={onChangeManaCostSelect}
    />
}

const mapStateToProps = (state) => ({
    manaCost: state.requestReducer.options.manaCost
})

export default connect(mapStateToProps, {
    resetManaCost, 
    removeManaCost, 
    setManaCost
})(ManaCostContainer);