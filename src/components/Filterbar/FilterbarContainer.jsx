import React from 'react';
import { connect } from 'react-redux';
import Filterbar from './Filterbar';
import { setActualSet, makeRequestDefault } from '../../redux/requestReducer';

const FilterbarContainer = (props) => {
    const onChangeSet = (e) => {
        props.setActualSet(e.target.value)
    }


    return <Filterbar changeSet={onChangeSet} {...props} />
}

const mapStateToProps = (state) => ({
    sets: state.appReducer.sets,
    set: state.requestReducer.options.set
})

export default connect(mapStateToProps, { 
    makeRequestDefault,
    setActualSet 
})(FilterbarContainer);
