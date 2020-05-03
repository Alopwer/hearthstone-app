import React from 'react';
import { setOrderAndSort } from '../../../../redux/requestReducer';
import { connect } from 'react-redux';
import SortableHeader from './SortableHeader';
import { compose } from 'redux';
import WithSizes from 'react-sizes';

const SortableHeaderContainer = (props) => {

    const onToggleSort = (value) => {
        if (props.name === props.sort) {
            if (props.order === 'desc') {
                props.setOrderAndSort(`${value},asc`.split(','))
            } else {
                props.setOrderAndSort(`${value},desc`.split(','))
            }
        } else {
            props.setOrderAndSort(`${value},asc`.split(','))
        }
    }

    return <SortableHeader {...props} onToggleSort={onToggleSort} />
}

const mapStateToProps = state => ({
    order: state.requestReducer.options.order,
    sort: state.requestReducer.options.sort,
});

const mapSizesToProps = ({ width }) => ({
    isSmall: width < 490
});

export default compose(WithSizes(mapSizesToProps),
    connect(mapStateToProps, {setOrderAndSort})
)(SortableHeaderContainer)