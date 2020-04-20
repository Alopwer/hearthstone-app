import React from 'react'
import { connect } from 'react-redux'
import { setOrderAndSort } from '../../../../redux/requestReducer';
import OrderAndSortFilter from './OrderAndSortFilter';
import { compose } from 'redux';
import WithSizes from 'react-sizes';

const OrderAndSortFilterContainer = ({ setOrderAndSort, orderAndSort, sort, order, isSmall}) => {
	const onChangeSort = (elem) => {
		setOrderAndSort(elem.value.split(','))
    }

    const orderAndSortFilterItems = orderAndSort.map(s => ({value: s.value, label: s.name}))
    return !isSmall && <OrderAndSortFilter 
        orderAndSortFilterItems={orderAndSortFilterItems} 
        sort={sort} 
        order={order} 
        onChangeSort={onChangeSort}/>
}

const mapStateToProps = (state) => ({
    sort: state.requestReducer.options.sort,
    order: state.requestReducer.options.order,
	orderAndSort: state.staticInfoReducer.orderAndSort,
})

const mapSizesToProps = ({ width }) => ({
    isSmall: width < 992
})

export default compose(
    WithSizes(mapSizesToProps), 
    connect(mapStateToProps, {
        setOrderAndSort
    })
)(OrderAndSortFilterContainer)