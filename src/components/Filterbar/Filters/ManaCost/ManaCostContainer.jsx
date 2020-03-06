import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ManaCost from './ManaCost';
import {
    resetManaCost,
    setManaCost,
    removeManaCost,
    resetPage
} from '../../../../redux/requestReducer';

const ManaCostContainer = (props) => {

    const manaCostItems = []
    for (let i = 0; i <= 10; i++) {
        manaCostItems.push(
            <option key={i} value={i}>{ i }</option>
        )
    }
    manaCostItems.push(<option key={11} value={'all'}>All cost</option>)
    // const manaCostItems = []
    
    // for (let i = 0; i <= 10; i++) {
    //     manaCostItems.push(
    //         <button key={i} value={i}>{ i }</button>
    //     )
    // }
    
    const onChangeManaCostSelect = (e) => {
        props.resetPage()
        if (e.target.value === 'all') {
            props.resetManaCost()
        } else {
            props.resetManaCost()
            props.setManaCost(e.target.value)
        }
    }

    const onChangeManaCostButton = (e) => {
        props.resetPage()
        if (!props.manaCost.includes(e.target.value)) {
            if (e.target.value === 'all') {
                props.resetManaCost()
            } else {
                props.setManaCost(e.target.value)
            }
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
    setManaCost, 
    resetPage,
})(ManaCostContainer);