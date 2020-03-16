import React from 'react'

const OrderAndSortFilter = props => {
    const orderAndSortFilterItems = props.orderAndSort.map(s => (<option key={s.id} value={s.value}>{s.name}</option>))
    return <select value={`${props.sort},${props.order}`} onChange={props.onChangeSort} >
        { orderAndSortFilterItems }
    </select>
}

export default OrderAndSortFilter