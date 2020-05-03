import React from 'react';
import { connect } from 'react-redux';
import Filterbar from './Filterbar';
import { toggleAdditionalFilterbars } from '../../redux/uiReducer';
import { compose } from 'redux';
import WithSizes from 'react-sizes';

const FilterbarContainer = props => {
    return <Filterbar {...props} />
};

const mapStateToProps = state => ({
    additionalFilterbars: state.uiReducer.additionalFilterbars,
    requestOptions: state.requestReducer.options,
    metadata: state.appReducer.metadata,
    class: state.requestReducer.options.class,
    cardActive: state.cardReducer.cardActive
});

const mapSizesToProps = (sizes) => ({
    isLarge: sizes.width > 1260,
    isSmall: sizes.width < 991
})

export default compose(
    WithSizes(mapSizesToProps),
    connect(mapStateToProps, {
        toggleAdditionalFilterbars
    })
)(FilterbarContainer);
