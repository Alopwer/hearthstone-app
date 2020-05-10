import React from 'react';
import s from './CardsSection.module.scss';
import SingleCard from './SingleCard';

const CardsSection = props => {
    const singleCards = props.cards.map(c => <SingleCard image={c.image} id={c.id}/>)
    const ghostCards = [0,0,0,0,0].map(() => <div className={s['ghost-card']}></div>)
    return <div className={s['card-section']}>
        <h3>{props.nameClass}</h3>
        <div className={s['section-items']}>
            {singleCards}
            {ghostCards}
        </div>
    </div>
}

export default CardsSection;