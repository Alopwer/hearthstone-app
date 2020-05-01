import React from 'react';
import SortableHeaderContainer from './SortableHeaders/SortableHeaderContainer';

const CardsTableHeader = props => {
    return <thead>
        <tr>
            <SortableHeaderContainer name={'name'} label={'Card name'} {...props}/>
            { props.width > 500 && <th>Class</th> }
            <SortableHeaderContainer name={'manaCost'} label={'Mana'} {...props}/>
            <SortableHeaderContainer name={'health'} label={'Health'} {...props}/>
            <SortableHeaderContainer name={'attack'} label={'Attack'} {...props}/>
            { props.width > 786 && <th>Card Type</th> }
            { props.width > 894 && <th>Rarity</th> }
            { props.width > 1039 && <th>Minion Type</th> }
            { props.width > 1200 && <th>Keywords</th> }
        </tr>
    </thead>
}

export default CardsTableHeader