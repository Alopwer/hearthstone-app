import React from 'react';
import CardsTableBody from './CardsTableBody';
import CardsTableHeader from './CardsTableHeader';
import s from './CardsTable.module.scss';

const CardsTable = props => {
    return <div className={s['table_container']}>
        <table className={s['table']}>
            <CardsTableHeader isXLarge={props.isXLarge}
            isLarge={props.isLarge}
            isMedium={props.isMedium}
            isSmall={props.isSmall}
            isXSmall={props.isXSmall}/>
            <CardsTableBody cardsItems={props.cardsItems} />
        </table>
    </div>
}

export default CardsTable