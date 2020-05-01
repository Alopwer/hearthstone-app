import React from 'react';
import CardsFilterSortNOrder from '../CardsFilterSortNOrder';

const SortableHeader = ({ order, sort, name, label, onToggleSort }) => {
    return <th>
        <button onClick={() => onToggleSort(name)}>
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