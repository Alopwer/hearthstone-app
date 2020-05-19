import React from 'react';
import CardsViewMode from './CardsViewMode.jsx';
import WithSizes from 'react-sizes';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setViewMode } from '../../../../../redux/requestReducer';

const CardsViewModeContainer = props => {
    return <CardsViewMode {...props}/>
}

const mapStateToProps = (state) => ({
	viewMode: state.requestReducer.options.viewMode,
})

const mapSizesToProps = ({ width }) => ({
	isXSmall: width < 621
})

export default compose(
    WithSizes(mapSizesToProps),
    connect(mapStateToProps, { setViewMode })
)(CardsViewModeContainer)