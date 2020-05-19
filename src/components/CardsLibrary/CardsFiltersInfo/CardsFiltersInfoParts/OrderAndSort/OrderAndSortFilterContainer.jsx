import React from 'react';
import { connect } from 'react-redux';
import { setOrderAndSort } from '../../../../../redux/requestReducer';
import OrderAndSortFilter from './OrderAndSortFilter';

const OrderAndSortFilterContainer = ({ setOrderAndSort, orderAndSort, sort, order }) => {
	const onChangeSort = (elem) => {
		setOrderAndSort(elem.value.split(','))
    }

    const orderAndSortFilterItems = orderAndSort.map(s => ({value: s.value, label: s.name}))
    const currentValue = orderAndSort.find(i => i.value === `${sort},${order}`)

    return <OrderAndSortFilter 
        orderAndSortFilterItems={orderAndSortFilterItems} 
        sort={sort} 
        order={order} 
        currentValue={currentValue}
        onChangeSort={onChangeSort}/>
}

const mapStateToProps = (state) => ({
    sort: state.requestReducer.options.sort,
    order: state.requestReducer.options.order,
	orderAndSort: state.staticInfoReducer.orderAndSort,
})

export default connect(mapStateToProps, {
    setOrderAndSort
})(OrderAndSortFilterContainer)