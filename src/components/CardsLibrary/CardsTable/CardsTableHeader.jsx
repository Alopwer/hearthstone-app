import React from 'react';
import SortableHeaderContainer from './SortableHeaders/SortableHeaderContainer';

const CardsTableHeader = props => {
    return <thead>
        <tr>
            <SortableHeaderContainer name={'name'} label={'Card name'} />
            { props.isXSmall && <th>Class</th> }
            <SortableHeaderContainer name={'manaCost'} className={'mana'} />
            <SortableHeaderContainer name={'attack'} className={'attack'} />
            <SortableHeaderContainer name={'health'} className={'health'} />
            { props.isSmall && <th>Card Type</th> }
            { props.isMedium && <th>Rarity</th> }
            { props.isLarge && <th>Minion Type</th> }
            { props.isXLarge && <th>Keywords</th> }
        </tr>
    </thead>
}

export default CardsTableHeader