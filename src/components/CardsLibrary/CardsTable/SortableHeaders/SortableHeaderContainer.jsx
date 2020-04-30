import React from 'react';
import { setOrderAndSort } from '../../../../redux/requestReducer';
import { connect } from 'react-redux';
import SortableHeader from './SortableHeader';

const SortableHeaderContainer = (props) => {

    const onChangeSort = (value) => {
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

    return <SortableHeader onChangeSort={onChangeSort} {...props}/>
}

const mapStateToProps = state => ({
    order: state.requestReducer.options.order,
    sort: state.requestReducer.options.sort,
});

export default connect(mapStateToProps, {setOrderAndSort})(SortableHeaderContainer)