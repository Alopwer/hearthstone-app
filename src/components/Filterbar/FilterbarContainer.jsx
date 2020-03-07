import React from 'react';
import { connect } from 'react-redux';
import Filterbar from './Filterbar';
import { toggleAdditionalFilterbars } from '../../redux/uiReducer';

const FilterbarContainer = props => {
    return (
        <Filterbar {...props}/>
    );
};

const mapStateToProps = state => ({
    additionalFilterbars: state.uiReducer.additionalFilterbars
});

export default connect(mapStateToProps, {
    toggleAdditionalFilterbars
})(FilterbarContainer);
