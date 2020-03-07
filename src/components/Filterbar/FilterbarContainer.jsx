import React, { useState } from 'react';
import { connect } from 'react-redux';
import Filterbar from './Filterbar';
import { toggleAdditionalFilterbars } from '../../redux/requestReducer';

const FilterbarContainer = props => {
    return (
        <Filterbar {...props}/>
    );
};

const mapStateToProps = state => ({
    additionalFilterbars: state.requestReducer.additionalFilterbars
});

export default connect(mapStateToProps, {
    toggleAdditionalFilterbars
})(FilterbarContainer);
