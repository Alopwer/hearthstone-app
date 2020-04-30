import React from 'react';
import SortUp from '../../common/SortUp';
import SortDown from '../../common/SortDown';
import s from './CardsTable.module.scss';

const CardsFilterSortNOrder = (props) => {
    const basicCheck = () => {
        return props.sort === props.name
    }

    return <span className={s['sortBtns']}>
        <SortUp fill={basicCheck() && props.order === 'asc' && '#2B3E69'}/>
        <SortDown fill={basicCheck() && props.order === 'desc' && '#2B3E69'}/>
    </span>
}

export default CardsFilterSortNOrder