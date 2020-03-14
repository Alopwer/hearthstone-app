import React from 'react';
import CardsFilterSortNOrder from './CardsFilterSortNOrder';

const CardsTableHeader = props => {
    return <thead>
        <tr>
            <th>Card Name <CardsFilterSortNOrder sort={'name'} onChangeSort={props.onChangeSort}/> </th>
            <th>Class</th>
            <th>Mana <CardsFilterSortNOrder sort={'manaCost'} onChangeSort={props.onChangeSort}/></th>
            <th>Attack <CardsFilterSortNOrder sort={'attack'} onChangeSort={props.onChangeSort}/></th>
            <th>Health <CardsFilterSortNOrder sort={'health'} onChangeSort={props.onChangeSort}/></th>
            <th>Card Type</th>
            <th>Rarity</th>
            <th>Minion Type</th>
            <th>Keywords</th>
        </tr>
    </thead>
}

export default CardsTableHeader