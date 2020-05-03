import React from 'react';
import CardsFilterSortNOrder from '../CardsFilterSortNOrder';
import s from '../CardsTable.module.scss';

const SortableHeader = ({ order, sort, name, onToggleSort, label, className, isSmall }) => {
    return <th>
        <button onClick={() => onToggleSort(name)}>
            { !label ? !isSmall && <div className={s[className]}></div> : <span>{ label }</span>}
            <CardsFilterSortNOrder 
                name={name} 
                sort={sort} 
                order={order} 
            />
        </button>
    </th>
}

export default SortableHeader