import React from 'react';
import withCustomSelect from '../../../../../hoc/withCustomSelect';
import s from '../../CardsFilters.module.scss';

const OrderAndSortFilter = props => {
    return <div className={s['sortFilter']}>
        <span>Sort By:</span>
        {withCustomSelect({
            options: props.orderAndSortFilterItems,
            value: {
                label : props.currentValue.name, 
                value: props.currentValue.value
            },
            onChangeValue: props.onChangeSort,
        })}
    </div>
}

export default OrderAndSortFilter