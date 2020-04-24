import React from 'react'
import withCustomSelect from '../../../../hoc/withCustomSelect';
import s from '../CardsFilters.module.scss';

const OrderAndSortFilter = props => {
    return <div className={s['sortFilter']}>
        <span>Sort By:</span>
        {withCustomSelect({
            options: props.orderAndSortFilterItems, 
            defaultValue: {
                value: `${props.sort},${props.order}`,
                label: 'Mana: low to high'
            },
            onChangeValue: props.onChangeSort,
        })}
    </div>
}

export default OrderAndSortFilter