import React from 'react';
import SortableHeaderContainer from './SortableHeaders/SortableHeaderContainer';

const CardsTableHeader = props => {
    return <thead>
        <tr>
            <SortableHeaderContainer name={'name'} label={'Card name'} width={props.width}/>
            { props.width > 600 && <th>Class</th> }
            <SortableHeaderContainer name={'manaCost'} className={'mana'} width={props.width}/>
            <SortableHeaderContainer name={'attack'} className={'attack'} width={props.width}/>
            <SortableHeaderContainer name={'health'} className={'health'} width={props.width}/>
            { props.width > 786 && <th>Card Type</th> }
            { props.width > 914 && <th>Rarity</th> }
            { props.width > 1039 && <th>Minion Type</th> }
            { props.width > 1200 && <th>Keywords</th> }
        </tr>
    </thead>
}

export default CardsTableHeader