import React from 'react'
import withCustomSelect from '../../../../hoc/withCustomSelect';

const OrderAndSortFilter = props => {
    return withCustomSelect({
        options: props.orderAndSortFilterItems, 
        defaultValue: {
            value: `${props.sort},${props.order}`,
            label: 'Mana: low to high'
        },
        onChangeValue: props.onChangeSort,
    })
}

export default OrderAndSortFilter