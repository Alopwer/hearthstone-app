import React from 'react';
import { setClass } from '../../../../redux/requestReducer';
import { setClassName } from '../../../../redux/staticInfoReducer';
import ClassFilter from './ClassFilter';
import { connect } from 'react-redux';
import { compose } from 'redux';
import WithSizes from 'react-sizes';

const ClassContainer = props => {
	return <ClassFilter {...props}/>
};

const mapStateToProps = state => ({
    classes: state.appReducer.metadata.classes,
    classValue: state.requestReducer.options.class,
});

const mapSizesToProps = (sizes) => ({
    isSmall: sizes.width < 991
})

export default compose(
    WithSizes(mapSizesToProps),
    connect(mapStateToProps, {
        setClass,
        setClassName,
    })
)(ClassContainer);
