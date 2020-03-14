import React from 'react';
import CardsTableBody from './CardsTableBody';
import CardsTableHeader from './CardsTableHeader';

const CardsTable = props => {
    return <table>
        <CardsTableHeader onChangeSort={props.onChangeSort}/>
        <CardsTableBody cardsItems={props.cardsItems}/>
    </table>
}

export default CardsTable