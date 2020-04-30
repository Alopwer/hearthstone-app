import React from 'react';
import SortableHeaderContainer from './SortableHeaders/SortableHeaderContainer';

const CardsTableHeader = (props) => {
    return <thead>
        <tr>
            <SortableHeaderContainer name={'name'} label={'Card name'} {...props}/>
            <th>Class</th>
            <SortableHeaderContainer name={'manaCost'} label={'Mana'} {...props}/>
            <SortableHeaderContainer name={'health'} label={'Health'} {...props}/>
            <SortableHeaderContainer name={'attack'} label={'Attack'} {...props}/>
            <th>Card Type</th>
            <th>Rarity</th>
            <th>Minion Type</th>
            <th>Keywords</th>
        </tr>
    </thead>
}

export default CardsTableHeader