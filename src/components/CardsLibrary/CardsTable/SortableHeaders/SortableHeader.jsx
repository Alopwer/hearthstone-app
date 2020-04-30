import React from 'react';
import CardsFilterSortNOrder from '../CardsFilterSortNOrder';

const SortableHeader = ({ order, sort, name, label }) => {
    return <th>
        <button onClick={() => onChangeSort(name)}>
            { label }
            <CardsFilterSortNOrder 
                name={name} 
                sort={sort} 
                order={order} 
            />
        </button>
    </th>
}

export default SortableHeader