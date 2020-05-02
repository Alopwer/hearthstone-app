import React from 'react';
import CardsTableBody from './CardsTableBody';
import CardsTableHeader from './CardsTableHeader';
import s from './CardsTable.module.scss';

const CardsTable = props => {
    return <table className={s['table']}>
        <CardsTableHeader width={props.width}/>
        <CardsTableBody cardsItems={props.cardsItems} />
    </table>
}

export default CardsTable